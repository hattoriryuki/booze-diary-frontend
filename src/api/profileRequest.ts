import { client } from "./client";
import { UserDetailParams } from "../types/api/user";

type UpdateParams = Omit<UserDetailParams, "id" | "posts">;

export const profileReq = (id: number | undefined) => {
  return client.get(`/profiles/${id}`);
};

export const updateProfileReq = (id: number, params: UpdateParams) => {
  return client.patch(`/profiles/${id}`, params);
};
