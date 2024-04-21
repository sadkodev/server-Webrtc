export interface WebRTC {
  start(): void;
  stop(): void;
  send(data: string): void;
  receive(data: string): void;
}
