import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  InitiateAuthCommandInput,
} from "@aws-sdk/client-cognito-identity-provider";
import { Type } from "@sinclair/typebox";
import { renderFile } from "ejs";
import { Elysia } from "elysia";
import { join } from "path";

export class AuthConfig {
  private client = new CognitoIdentityProviderClient({
    region: "us-east-1",
  });

  public async signIn(email: string, password: string) {
    try {
      const email_ = `hng_${email}@k2.com.pe`;
      const pass_ = `a${password}A@`;
      const input: InitiateAuthCommandInput = {
        AuthFlow: "USER_PASSWORD_AUTH",
        ClientId: "5l27rkkjrpc8om8eo4ocsqoa8q",
        AuthParameters: {
          USERNAME: email_,
          PASSWORD: pass_,
        },
      };

      const command = new InitiateAuthCommand(input);
      const response = await this.client.send(command);
      return response.AuthenticationResult;
    } catch (error) {
      throw error;
    }
  }

  public async signInAdmin(email: string, password: string) {
    try {
      const email_ = email;
      const pass_ = `K2~hng2@24!#.-/'%^?_><,`;
      const input: InitiateAuthCommandInput = {
        AuthFlow: "USER_PASSWORD_AUTH",
        ClientId: "5l27rkkjrpc8om8eo4ocsqoa8q",
        AuthParameters: {
          USERNAME: email_,
          PASSWORD: pass_,
        },
      };

      const command = new InitiateAuthCommand(input);
      const response = await this.client.send(command);
      return response.AuthenticationResult;
    } catch (error) {
      throw error;
    }
  }
}

export const UserLoginSchema = Type.Object({
  username: Type.String(),
  password: Type.String(),
});

export const app = new Elysia();

// Ruta para mostrar el formulario de inicio de sesión
app.get("/login", async (req) => {
  const isAdmin = req.query.admin === "true";
  const html = await renderFile(join(__dirname, "views", "login.ejs"), {
    isAdmin,
  });
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
    return {
      tokenId: resp.IdToken,
      accessToken: resp.AccessToken,
    };
  },
  {
    body: UserLoginSchema,
  }
);

// Ruta para manejar el inicio de sesión de administradores
app.post(
  "/auth/login/admin",
  async ({ body }) => {
    const { username, password } = body;
    const auth = new AuthConfig();
    const resp: any = await auth.signInAdmin(username, password);
    return {
      tokenId: resp.IdToken,
      accessToken: resp.AccessToken,
    };
  },
  {
    body: UserLoginSchema,
  }
);

// app.listen(3000);
// console.log("Server running at http://localhost:3000");
