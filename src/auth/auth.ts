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
    region: process.env.REGION,
  });

  public async signIn(email: string, password: string) {
    try {
      const input: InitiateAuthCommandInput = {
        AuthFlow: "USER_PASSWORD_AUTH",
        ClientId: process.env.CLIENT_ID,
        AuthParameters: {
          USERNAME: email,
          PASSWORD: password,
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
