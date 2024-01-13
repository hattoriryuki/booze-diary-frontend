import { UserDetailParams } from "./user";

export type PostParams = {
  id: number;
  name: string;
  quantity: string;
  price: string;
  recommend: number;
  image: string;
  userId: number;
  username?: string;
  avatar?: string;
  user?: UserDetailParams;
  created_at: string;
};
