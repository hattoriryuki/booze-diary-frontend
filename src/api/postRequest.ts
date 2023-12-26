import { createPostParams } from "../types/api/post";
import { client } from "./client";

export const getListReq = () => {
  return client.get("/posts");
};

export const getDetailReq = (id: number) => {
  return client.get(`/posts/${id}`);
};

export const createPostReq = (params: createPostParams) => {
  return client.post("/posts", params);
};
