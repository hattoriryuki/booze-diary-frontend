import Cookies from "js-cookie";

import { createPostParams } from "../types/api/post";
import { client } from "./client";

export const getListReq = () => {
  return client.get("/posts");
};

export const getDetailReq = (id: number) => {
  return client.get(`/posts/${id}`);
};

export const createPostReq = (params: createPostParams) => {
  return client.post("/posts", params, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};
