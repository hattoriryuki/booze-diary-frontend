import Cookies from "js-cookie";

import { client, headers } from "./client";
import { SignInParams, SignUpParams } from "../types/api/userAuth";

export const signInReq = (params: SignInParams) => {
  return client.post("auth/sign_in", params);
};

export const signUpReq = (params: SignUpParams) => {
  return client.post("auth", params);
};

export const getCurrentUser = () => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  )
    return;
  return client.get("/auth/sessions", {
    headers: headers,
  });
};
