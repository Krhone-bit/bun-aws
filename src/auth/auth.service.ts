import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  InitiateAuthCommandInput,
  InitiateAuthCommandOutput,
} from "@aws-sdk/client-cognito-identity-provider";

export class AuthConfig {
  private client = new CognitoIdentityProviderClient({
    region: process.env.REGION,
  });

  public async signIn(email: string, password: string) {
    try {
      console.log(email, password);
      console.log(process.env.CLIENT_ID);
      const input: InitiateAuthCommandInput = {
        AuthFlow: "USER_PASSWORD_AUTH",
        ClientId: process.env.CLIENT_ID,
        AuthParameters: {
          USERNAME: email,
          PASSWORD: password,
        },
      };

      const command = new InitiateAuthCommand(input);
      const response: InitiateAuthCommandOutput = await this.client.send(
        command
      );
      return response.AuthenticationResult;
    } catch (error: any) {
      console.log(error.message);
      return error.message;
    }
  }
}
