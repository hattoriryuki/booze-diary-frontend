import { PostParams } from "../types/api/post";
import { client, headers } from "./client";

export const getListReq = () => {
  return client.get("/posts");
};

export const getDetailReq = (id: number) => {
  return client.get(`/posts/${id}`);
};

export const createPostReq = (params: PostParams) => {
  return client.post("/posts", params, {
    headers: headers,
  });
};
