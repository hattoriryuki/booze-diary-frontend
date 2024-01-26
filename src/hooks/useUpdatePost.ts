import { Dispatch, SetStateAction, useCallback } from "react";

import { updatePostReq } from "../api/postRequests";
import { PostParams, UpdateParams } from "../types/api/post";
import { useToastMsg } from "./useToastMsg";

type Props = {
  post: PostParams | undefined;
  setEditFlag: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
};

export const useUpdatePost = (props: Props) => {
  const { post, setEditFlag, onClose } = props;
  const { showToastMsg } = useToastMsg();

  const updatePost = useCallback(
    async (props: UpdateParams) => {
      if (!post) return;
      try {
        const res = await updatePostReq(post?.id, props);
        if (res.status === 200) {
          setEditFlag(true);
          onClose();
          showToastMsg({
            status: "success",
            title: "投稿を更新しました",
          });
        }
      } catch (err) {
        showToastMsg({
          status: "error",
          title: "投稿を更新できませんでした",
        });
      }
    },
    [post]
  );
  return { updatePost };
};
