import Cookies from "js-cookie";
import { client } from "./client";

import { SignInParams } from "../theme/api/userAuth";

export const signIn = (params: SignInParams) => {
  return client.post("auth/sign_in", params);
};

export const getCurrentUser = () => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  )
    return;
  return client.get("/auth/sessions", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};
