import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import { PostParams } from "../types/api/post";
import { getListReq } from "../api/postRequest";
import { useToastMsg } from "./useToastMsg";
import { User } from "../types/api/userAuth";
import { useGetAllUsers } from "./useGetAllUsers";

type Props = {
  setTargetPosts: Dispatch<SetStateAction<PostParams[]>>;
};

export const useGetAllPosts = (props: Props) => {
  const { setTargetPosts } = props;
  const [users, setUsers] = useState<User[]>([]);
  const { showToastMsg } = useToastMsg();
  const { getUsers } = useGetAllUsers({ setUsers: setUsers });

  useEffect(() => {
    getUsers();
  }, []);

  const getPosts = useCallback(async () => {
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
        const targetUser = users.find((user) => user.id === data.userId);
        if (targetUser) {
          data.username = targetUser.name;
          data.avatar = targetUser.image;
        }
        return data;
      });
      setTargetPosts(customPosts);
    } catch (e) {
      showToastMsg({ status: "error", title: "投稿を取得できませんでした" });
    }
  }, []);

  return { getPosts };
};
