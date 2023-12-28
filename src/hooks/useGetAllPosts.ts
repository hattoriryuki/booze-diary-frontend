import { useState } from "react";

import { PostParams } from "../types/api/post";
import { getListReq } from "../api/postRequest";
import { useToastMsg } from "./useToastMsg";

export const useGetAllPosts = () => {
  const [posts, setPosts] = useState<PostParams[]>([]);
  const { showToastMsg } = useToastMsg();

  const getPosts = async () => {
    try {
      const res = await getListReq();
      setPosts(res.data);
    } catch (e) {
      showToastMsg({ status: "error", title: "投稿を取得できませんでした" });
    }
  };
  return { getPosts, posts };
};
