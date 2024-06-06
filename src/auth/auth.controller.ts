import { Type } from "@sinclair/typebox";
import { renderFile } from "ejs";
import Elysia from "elysia";
import { join } from "path";
import { AuthConfig } from "./auth.service.js";

export const app = new Elysia();

export const UserLoginSchema = Type.Object({
  username: Type.String(),
  password: Type.String(),
});

// Ruta para mostrar el formulario de inicio de sesión
app.get("/login", async (req) => {
  // const isAdmin = req.query.admin === "true";
  const html = await renderFile(join(__dirname, "views", "login.ejs"));
  return new Response(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
});

// Ruta para manejar el inicio de sesión de usuarios
app.post(
  "/auth/login",
  async ({ body }) => {
    const { username, password } = body;
    const auth = new AuthConfig();
    const resp: any = await auth.signIn(username, password);
    // console.log(resp);
    return {
      data: {
        tokenId: resp.IdToken,
        accessToken: resp.AccessToken,
      },
      error: resp || null,
    };
  },
  {
    body: UserLoginSchema,
  }
);
