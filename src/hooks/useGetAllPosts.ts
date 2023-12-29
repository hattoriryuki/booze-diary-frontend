import { Dispatch, SetStateAction } from "react";

import { PostParams } from "../types/api/post";
import { getListReq } from "../api/postRequest";
import { useToastMsg } from "./useToastMsg";

type Props = {
  setPosts: Dispatch<SetStateAction<PostParams[]>>
};

export const useGetAllPosts = (props: Props) => {
  const { setPosts } = props;
  const { showToastMsg } = useToastMsg();

  const getPosts = async () => {
    try {
      const res = await getListReq();
      setPosts(res.data);
    } catch (e) {
      showToastMsg({ status: "error", title: "投稿を取得できませんでした" });
    }
  };
  return { getPosts };
};
