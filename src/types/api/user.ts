import { PostParams } from "./post";

export type UserDetailParams = {
  id: number;
  name: string;
  image: string;
  posts: PostParams[];
};
