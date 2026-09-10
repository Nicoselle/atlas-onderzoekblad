/**
 * WebRTC peer-to-peer room primitives.
 *
 * NOTE: This file is a reconstruction stub. The original platform-injected
 * module was not committed to this repository, and nothing in the committed
 * codebase currently imports `@/lib/multiplayer` (it is re-exported by
 * `./index.ts` but otherwise unused). This stub restores the exported type and
 * value surface so the project type-checks; the room itself is intentionally
 * inert and throws if actually constructed, rather than pretending to provide
 * signaling that this reconstruction cannot faithfully reproduce.
 */

export type SignalKind = "offer" | "answer" | "candidate";

export type PeerInfo = {
  peerId: string;
  name?: string;
  joinedAt?: number;
};

export type PeerRow = PeerInfo & {
  roomId: string;
};

export type SignalRow = {
  roomId: string;
  fromPeerId: string;
  toPeerId: string;
  kind: SignalKind;
  payload: unknown;
  createdAt: number;
};

export type RtcPollResponse = {
  peers: PeerRow[];
  signals: SignalRow[];
};

export type P2PRoomOptions = {
  roomId: string;
  peerId?: string;
  iceServers?: RTCIceServer[];
  onPeers?: (peers: PeerInfo[]) => void;
};

export const defaultIceServers: RTCIceServer[] = [
  { urls: "stun:stun.l.google.com:19302" },
];

export class P2PRoom {
  readonly options: P2PRoomOptions;

  constructor(options: P2PRoomOptions) {
    this.options = options;
    throw new Error(
      "P2PRoom is not available in this reconstruction: the multiplayer harness module was not committed to the repository.",
    );
  }
}
