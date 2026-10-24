import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  MdClose,
  MdKeyboard,
  MdMic,
  MdOpenInNew,
  MdSend,
  MdStop,
  MdVolumeOff,
  MdVolumeUp,
} from "react-icons/md";
import {
  answerPortfolioQuestion,
  portfolioSuggestions,
  type PortfolioAnswer,
} from "../data/voiceKnowledge";
import "./styles/PortfolioVoice.css";

type VoicePhase =
  | "permission"
  | "idle"
  | "listening"
  | "thinking"
  | "speaking"
  | "error";

type Turn = {
  question: string;
  answer: PortfolioAnswer;
};

const preferredVoices = [
  "Ava",
  "Samantha",
  "Google US English",
  "Microsoft Aria",
  "Daniel",
];

const hasReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

const focusEvidence = (answer: PortfolioAnswer) => {
  if (window.location.pathname !== "/") {
    window.location.assign(`/#${answer.targetId}`);
    return;
  }

  const target = document.getElementById(answer.targetId);
  target?.scrollIntoView({
    behavior: hasReducedMotion() ? "auto" : "smooth",
    block: "start",
  });

  const selector = answer.focusProject
    ? `[data-voice-project="${answer.focusProject}"], [data-project="${answer.focusProject}"]`
    : undefined;
  const evidence = selector ? document.querySelector<HTMLElement>(selector) : null;
  if (!evidence) return;

  window.setTimeout(() => {
    evidence.classList.add("voice-evidence-focus");
    evidence.scrollIntoView({
      behavior: hasReducedMotion() ? "auto" : "smooth",
      block: "center",
    });
    window.setTimeout(() => evidence.classList.remove("voice-evidence-focus"), 4200);
  }, 350);
};

const PortfolioVoice = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"voice" | "text">("voice");
  const [phase, setPhase] = useState<VoicePhase>("permission");
  const [question, setQuestion] = useState("");
  const [pendingQuestion, setPendingQuestion] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [turns, setTurns] = useState<Turn[]>([]);
  const [muted, setMuted] = useState(false);
  const [error, setError] = useState("");
  const dialogRef = useRef<HTMLElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const answerTimerRef = useRef<number | null>(null);

  const recognitionConstructor = useMemo(
    () => window.SpeechRecognition ?? window.webkitSpeechRecognition,
    [],
  );
  const speechSupported = "speechSynthesis" in window;
  const micSupported = Boolean(recognitionConstructor);
  const lastTurn = turns.length ? turns[turns.length - 1] : undefined;

  const stopSpeaking = useCallback(() => {
    window.speechSynthesis?.cancel();
    setPhase((current) => (current === "speaking" ? "idle" : current));
  }, []);

  const speak = useCallback(
    (answer: PortfolioAnswer) => {
      if (muted || !speechSupported) {
        setPhase("idle");
        return;
      }

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(answer.body);
      const voices = window.speechSynthesis.getVoices();
      utterance.voice =
        preferredVoices
          .map((name) => voices.find((voice) => voice.name.includes(name)))
          .find(Boolean) ?? voices.find((voice) => voice.lang.startsWith("en")) ?? null;
      utterance.lang = "en-US";
      utterance.rate = 0.98;
      utterance.pitch = 0.98;
      utterance.volume = 1;
      utterance.onstart = () => setPhase("speaking");
      utterance.onend = () => setPhase("idle");
      utterance.onerror = () => {
        setError("The spoken answer could not play. The transcript is still available.");
        setPhase("idle");
      };
      window.speechSynthesis.speak(utterance);
    },
    [muted, speechSupported],
  );

  const answerQuestion = useCallback(
    (rawQuestion: string) => {
      const cleaned = rawQuestion.trim();
      if (!cleaned) return;

      stopSpeaking();
      setError("");
      setInterimTranscript("");
      setPhase("thinking");
      setPendingQuestion(cleaned);
      setQuestion("");
      if (answerTimerRef.current) window.clearTimeout(answerTimerRef.current);

      answerTimerRef.current = window.setTimeout(() => {
        const answer = answerPortfolioQuestion(cleaned);
        setTurns((current) => [...current.slice(-2), { question: cleaned, answer }]);
        setPendingQuestion("");
        focusEvidence(answer);
        speak(answer);
      }, 260);
    },
    [speak, stopSpeaking],
  );

  const startListening = useCallback(() => {
    if (!recognitionConstructor) {
      setMode("text");
      setPhase("error");
      setError("Voice input is not supported in this browser. Type your question instead.");
      window.setTimeout(() => inputRef.current?.focus(), 0);
      return;
    }

    stopSpeaking();
    recognitionRef.current?.abort();
    const recognition = new recognitionConstructor();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognition.maxAlternatives = 1;
    recognition.onstart = () => {
      setError("");
      setPhase("listening");
      setInterimTranscript("Listening…");
    };
    recognition.onresult = (event) => {
      let interim = "";
      let final = "";
      for (let index = event.resultIndex; index < event.results.length; index += 1) {
        const transcript = event.results[index][0]?.transcript ?? "";
        if (event.results[index].isFinal) final += transcript;
        else interim += transcript;
      }
      setInterimTranscript(interim || final || "Listening…");
      if (final.trim()) {
        recognition.stop();
        answerQuestion(final);
      }
    };
    recognition.onerror = (event) => {
      const messages: Record<string, string> = {
        "not-allowed": "Microphone access is blocked. Allow it in your browser or type instead.",
        "audio-capture": "No microphone was found. Connect one or type instead.",
        network: "Speech recognition could not reach the browser service. Type instead.",
        "no-speech": "I did not hear a question. Try again or type it.",
      };
      setError(messages[event.error] ?? "Voice input stopped. Try again or type instead.");
      setPhase("error");
      setInterimTranscript("");
    };
    recognition.onend = () => {
      setPhase((current) => (current === "listening" ? "idle" : current));
    };
    recognitionRef.current = recognition;

    try {
      recognition.start();
    } catch {
      setError("Voice input is already starting. Try again in a moment.");
      setPhase("error");
    }
  }, [answerQuestion, recognitionConstructor, stopSpeaking]);

  const closePanel = useCallback(() => {
    recognitionRef.current?.abort();
    stopSpeaking();
    setOpen(false);
    setPhase("permission");
    setInterimTranscript("");
    setError("");
  }, [stopSpeaking]);

  useEffect(() => {
    if (!open) return;
    dialogRef.current?.focus({ preventScroll: true });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePanel();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closePanel, open]);

  useEffect(
    () => () => {
      recognitionRef.current?.abort();
      window.speechSynthesis?.cancel();
      if (answerTimerRef.current) window.clearTimeout(answerTimerRef.current);
    },
    [],
  );

  const submitText = (event: FormEvent) => {
    event.preventDefault();
    answerQuestion(question);
  };

  const phaseLabel = {
    permission: "Ready when you are",
    idle: "Ask another question",
    listening: "Listening",
    thinking: "Finding evidence",
    speaking: "Speaking",
    error: "Needs attention",
  }[phase];

  return (
    <>
      {open && (
        <aside
          aria-label="Ask Tarang's portfolio"
          className="voice-console"
          ref={dialogRef}
          role="dialog"
          tabIndex={-1}
        >
          <header className="voice-console-header">
            <div>
              <span className={`voice-state-dot is-${phase}`} aria-hidden="true" />
              <p>Interview console</p>
              <strong>{phaseLabel}</strong>
            </div>
            <button type="button" onClick={closePanel} aria-label="Close interview console">
              <MdClose aria-hidden="true" />
            </button>
          </header>

          <div className="voice-console-body" aria-live="polite">
            {phase === "permission" && !lastTurn ? (
              <section className="voice-permission">
                <span>Voice is optional</span>
                <h2>Ask about the work. Get the evidence.</h2>
                <p>
                  Your browser may use its speech service to transcribe audio. This
                  site does not record or store your microphone audio.
                </p>
                <div className="voice-permission-actions">
                  <button className="voice-primary" type="button" onClick={startListening} disabled={!micSupported}>
                    <MdMic aria-hidden="true" /> {micSupported ? "Enable microphone" : "Microphone unavailable"}
                  </button>
                  <button
                    className="voice-secondary"
                    type="button"
                    onClick={() => {
                      setMode("text");
                      setPhase("idle");
                      window.setTimeout(() => inputRef.current?.focus(), 0);
                    }}
                  >
                    <MdKeyboard aria-hidden="true" /> Use keyboard
                  </button>
                </div>
              </section>
            ) : (
              <>
                {lastTurn && (
                  <section className="voice-answer-card">
                    <p className="voice-question">“{lastTurn.question}”</p>
                    <span>Evidence brief</span>
                    <h2>{lastTurn.answer.title}</h2>
                    <p>{lastTurn.answer.body}</p>
                    <ul>
                      {lastTurn.answer.sources.map((source) => (
                        <li key={`${source.label}-${source.href ?? "local"}`}>
                          {source.href ? (
                            <a href={source.href} target={source.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                              {source.label} <MdOpenInNew aria-hidden="true" />
                            </a>
                          ) : (
                            <span>{source.label}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {(phase === "listening" || phase === "thinking") && (
                  <div className="voice-live-transcript">
                    <span>{phase === "listening" ? "Live transcript" : "Question"}</span>
                    <p>{phase === "thinking" ? pendingQuestion || "Finding the strongest evidence…" : interimTranscript}</p>
                  </div>
                )}

                {error && <p className="voice-error">{error}</p>}

                <div className="voice-suggestions" aria-label="Suggested portfolio questions">
                  {portfolioSuggestions.slice(0, lastTurn ? 3 : 5).map((suggestion) => (
                    <button type="button" key={suggestion} onClick={() => answerQuestion(suggestion)}>
                      {suggestion}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {(phase !== "permission" || lastTurn) && <footer className="voice-console-footer">
            {mode === "voice" ? (
              <>
                {phase === "listening" ? (
                  <button
                    className="voice-primary is-stop"
                    type="button"
                    onClick={() => recognitionRef.current?.stop()}
                  >
                    <MdStop aria-hidden="true" /> Stop listening
                  </button>
                ) : phase === "speaking" ? (
                  <button className="voice-primary is-stop" type="button" onClick={stopSpeaking}>
                    <MdStop aria-hidden="true" /> Stop answer
                  </button>
                ) : (
                  <button className="voice-primary" type="button" onClick={startListening}>
                    <MdMic aria-hidden="true" /> Ask by voice
                  </button>
                )}
                <button
                  className="voice-icon-button"
                  type="button"
                  aria-label={muted ? "Turn spoken answers on" : "Mute spoken answers"}
                  aria-pressed={muted}
                  onClick={() => {
                    if (!muted) stopSpeaking();
                    setMuted((current) => !current);
                  }}
                >
                  {muted ? <MdVolumeOff aria-hidden="true" /> : <MdVolumeUp aria-hidden="true" />}
                </button>
                <button
                  className="voice-mode-switch"
                  type="button"
                  onClick={() => {
                    recognitionRef.current?.abort();
                    setMode("text");
                    setPhase("idle");
                    window.setTimeout(() => inputRef.current?.focus(), 0);
                  }}
                >
                  Type instead
                </button>
              </>
            ) : (
              <form onSubmit={submitText} className="voice-text-form">
                <input
                  aria-label="Ask a portfolio question"
                  autoComplete="off"
                  maxLength={500}
                  onChange={(event) => setQuestion(event.target.value)}
                  placeholder="Ask about Locus, experience, or the eight wins…"
                  ref={inputRef}
                  value={question}
                />
                <button type="submit" disabled={!question.trim() || phase === "thinking"} aria-label="Send question">
                  <MdSend aria-hidden="true" />
                </button>
                <button
                  className="voice-mode-switch"
                  type="button"
                  onClick={() => {
                    setMode("voice");
                    setPhase("idle");
                  }}
                >
                  Use voice
                </button>
              </form>
            )}
          </footer>}
        </aside>
      )}

      {!open && (
        <button
          className="voice-launcher"
          type="button"
          onClick={() => {
            setOpen(true);
            setPhase("permission");
          }}
          aria-label="Ask Tarang's portfolio by voice or text"
        >
          <span className="voice-launcher-copy">
            <small>Voice or text</small>
            <strong>Ask Tarang’s portfolio</strong>
          </span>
          <span className="voice-launcher-meter" aria-hidden="true">
            {[12, 22, 34, 19, 28, 15].map((height, index) => (
              <i key={`${height}-${index}`} style={{ height }} />
            ))}
          </span>
          <span className="voice-launcher-mic">
            <MdMic aria-hidden="true" />
          </span>
        </button>
      )}
    </>
  );
};

export default PortfolioVoice;
