import type { WebRTC } from "@/models/interface";
import { showMsg } from "./utils/errors";

export default class Server implements WebRTC {
  constructor() {}

  start() {
    showMsg({ msg: "Server started", type: "info" });
  }
  stop(): void {}

  send(data: string): void {}

  receive(data: string): void {}
}
