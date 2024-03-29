import Cookies from "js-cookie";

import { PostParams } from "../types/api/post";
import { client, headers } from "./client";

type UpdateParams = Pick<
  PostParams,
  "name" | "quantity" | "price" | "recommend"
>;

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

export const updatePostReq = (id: number, params: UpdateParams) => {
  return client.patch(`/posts/${id}`, params, {
    headers,
  });
};

export const deletePostReq = (id: number) => {
  return client.delete(`/posts/${id}`, {
    headers,
  });
};
