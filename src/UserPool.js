import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-2_2A5hxyxwv",
  ClientId: "5ed5puubhtj2ensfua6eov2uhs",
};

export default new CognitoUserPool(poolData);
