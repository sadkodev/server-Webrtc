import Server from "@/server";

const app = new Server();

try {
  app.start();
} catch (error) {
  console.error(error);
}
