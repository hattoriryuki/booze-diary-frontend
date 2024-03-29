import Cookies from "js-cookie";

import { client, headers } from "./client";
import { SignInParams, SignUpParams } from "../types/api/userAuth";

export const signInReq = (params: SignInParams) => {
  return client.post("auth/sign_in", params);
};

export const signOutReq = () => {
  return client.delete("auth/sign_out", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
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

export const GuestLoginReq = () => {
  return client.post("/auth/guest_sign_in");
};
