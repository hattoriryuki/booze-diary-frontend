import { PostParams } from "./post";

export type UserDetailParams = {
  id: number;
  name: string;
  image: string;
  email: string;
  posts: PostParams[];
};
