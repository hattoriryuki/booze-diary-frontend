import { useNavigate } from "react-router-dom";
import { deletePostReq } from "../api/postRequests";
import { useToastMsg } from "./useToastMsg";

export const useDeletePost = () => {
  const { showToastMsg } = useToastMsg();
  const navigate = useNavigate();

  const deletePost = async (id: number) => {
    try {
      const res = await deletePostReq(id);
      if (res.status === 200) {
        navigate("/posts");
        showToastMsg({
          status: "success",
          title: "投稿を削除しました",
        });
      }
    } catch (err) {
      showToastMsg({
        status: "error",
        title: "投稿を削除できませんでした",
      });
    }
  };
  return { deletePost };
};
