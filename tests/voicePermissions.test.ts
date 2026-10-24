import test from "node:test";
import assert from "node:assert/strict";
import {
  requestMicrophonePermission,
  type MicrophonePermissionResult,
} from "../src/utils/voicePermissions.ts";

const makeTrack = () => {
  let stopped = false;
  return {
    get stopped() {
      return stopped;
    },
    stop() {
      stopped = true;
    },
  };
};

test("requests audio permission and releases the temporary stream", async () => {
  const track = makeTrack();
  let requestedConstraints: MediaStreamConstraints | undefined;
  const mediaDevices = {
    async getUserMedia(constraints: MediaStreamConstraints) {
      requestedConstraints = constraints;
      return { getTracks: () => [track] } as unknown as MediaStream;
    },
  } as MediaDevices;

  const result = await requestMicrophonePermission(mediaDevices);

  assert.deepEqual(result, { status: "granted" } satisfies MicrophonePermissionResult);
  assert.deepEqual(requestedConstraints, { audio: true });
  assert.equal(track.stopped, true);
});

test("classifies a denied browser permission", async () => {
  const error = new DOMException("Permission denied", "NotAllowedError");
  const mediaDevices = {
    async getUserMedia() {
      throw error;
    },
  } as unknown as MediaDevices;

  assert.deepEqual(await requestMicrophonePermission(mediaDevices), {
    status: "blocked",
  } satisfies MicrophonePermissionResult);
});

test("reports browsers without microphone capture support", async () => {
  assert.deepEqual(await requestMicrophonePermission(undefined), {
    status: "unsupported",
  } satisfies MicrophonePermissionResult);
});

test("reports when no microphone is connected", async () => {
  const error = new DOMException("No device", "NotFoundError");
  const mediaDevices = {
    async getUserMedia() {
      throw error;
    },
  } as unknown as MediaDevices;

  assert.deepEqual(await requestMicrophonePermission(mediaDevices), {
    status: "unavailable",
  } satisfies MicrophonePermissionResult);
});
