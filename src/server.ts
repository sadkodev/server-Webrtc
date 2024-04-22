import type { WebRTC } from "@/models/interface";
import WebSocket from "ws";
import { showMsg } from "./utils/errors";

const port = 8181;

export default class Server implements WebRTC {
  constructor() {}

  start() {
    showMsg({ msg: "Server started", type: "info" });
    startServer(port);
  }
  stop(): void {}

  send(data: string): void {}

  receive(data: string): void {}
}

const startServer = (port: number) => {
  const wss = new WebSocket.Server({ port });
  wss.on("connection", (ws) => {
    ws.on("message", (message) => {
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message.toString());
          showMsg({ msg: message.toString(), type: "info" });
        }
      });
    });
  });
};
