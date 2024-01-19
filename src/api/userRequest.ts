import Cookies from "js-cookie";

import { client } from "./client";

export const userReq = (id: number | undefined) => {
  return client.get(`/profiles/${id}`, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};
