import { useNavigate } from "react-router";

import { createPostReq } from "../api/postRequest";
import { PostParams } from "../types/api/post";
import { useToastMsg } from "./useToastMsg";

export const useCreatePost = () => {
  const navigate = useNavigate();
  const { showToastMsg } = useToastMsg();

  const createPost = async (
    params: Omit<PostParams, "id" | "userId" | "updatedAt">
  ) => {
    try {
      const res = await createPostReq(params);
      navigate("/index");
      showToastMsg({ status: "success", title: "投稿しました" });
    } catch (err) {
      showToastMsg({ status: "error", title: "投稿に失敗しました" });
    }
  };
  return { createPost };
};
