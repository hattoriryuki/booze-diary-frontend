import { Dispatch, SetStateAction } from "react";

import { PostParams } from "../types/api/post";
import { getListReq } from "../api/postRequest";
import { useToastMsg } from "./useToastMsg";

type Props = {
  setPosts: Dispatch<SetStateAction<PostParams[]>>;
};

export const useGetAllPosts = (props: Props) => {
  const { setPosts } = props;
  const { showToastMsg } = useToastMsg();

  const getPosts = async () => {
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
      setPosts(sorted);
    } catch (e) {
      showToastMsg({ status: "error", title: "投稿を取得できませんでした" });
    }
  };
  return { getPosts };
};
