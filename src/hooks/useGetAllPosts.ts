import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";

import { PostParams } from "../types/api/post";
import { getListReq } from "../api/postRequest";
import { useToastMsg } from "./useToastMsg";
import { User } from "../types/api/userAuth";
import { useGetAllUsers } from "./useGetAllUsers";

type Props = {
  setPosts: Dispatch<SetStateAction<PostParams[]>>;
};

export const useGetAllPosts = (props: Props) => {
  const { setPosts } = props;
  const userRef = useRef<User[]>([]);
  const { showToastMsg } = useToastMsg();
  const { getUsers } = useGetAllUsers({ userRef: userRef });

  useEffect(() => {}, []);

  const getPosts = useCallback(async () => {
    getUsers();
    try {
      const res = await getListReq();
      const data: PostParams[] = res.data;
      const sorted = [...data].sort((x, y) => {
        if (x.updatedAt < y.updatedAt) {
          return 1;
        }
        if (x.updatedAt > y.updatedAt) {
          return -1;
        }
        return 0;
      });
      const customPosts = sorted.map((data) => {
        const targetUser = userRef.current.find(
          (user) => user.id === data.userId
        );
        if (targetUser) {
          data.username = targetUser.name;
          data.avatar = targetUser.image;
        }
        return data;
      });
      setPosts(customPosts);
    } catch (e) {
      showToastMsg({ status: "error", title: "投稿を取得できませんでした" });
    }
  }, []);

  return { getPosts };
};
