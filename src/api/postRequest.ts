import Cookies from "js-cookie";

import { PostParams } from "../types/api/post";
import { client, headers } from "./client";

export const getListReq = () => {
  return client.get("/posts", { headers: headers });
};

export const getDetailReq = (id: string | undefined) => {
  return client.get(`/posts/${id}`);
};

export const createPostReq = (
  params: Omit<PostParams, "id" | "userId" | "created_at">
) => {
  return client.post("/posts", params, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};
