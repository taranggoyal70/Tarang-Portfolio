export type MicrophonePermissionResult =
  | { status: "granted" }
  | { status: "blocked" }
  | { status: "unavailable" }
  | { status: "unsupported" }
  | { status: "error" };

export const requestMicrophonePermission = async (
  mediaDevices: MediaDevices | undefined,
): Promise<MicrophonePermissionResult> => {
  if (!mediaDevices?.getUserMedia) return { status: "unsupported" };

  try {
    const stream = await mediaDevices.getUserMedia({ audio: true });
    stream.getTracks().forEach((track) => track.stop());
    return { status: "granted" };
  } catch (error) {
    const name = error instanceof DOMException ? error.name : "";
    if (name === "NotAllowedError" || name === "SecurityError") {
      return { status: "blocked" };
    }
    if (name === "NotFoundError" || name === "DevicesNotFoundError") {
      return { status: "unavailable" };
    }
    return { status: "error" };
  }
};
