import { Elysia } from "elysia";
import * as authRouter from "../auth/auth.controller.js";

export class Server {
  private app: Elysia;

  constructor() {
    this.app = new Elysia();
    this.app.group("", (app) => app.use(authRouter.app));
  }

  public start() {
    this.app.listen({ port: process.env.PORT || 3000 }, () => {
      console.log(
        `🦊 Elysia is running at ${this.app.server?.hostname}:${this.app.server?.port}`
      );
    });
  }
}
