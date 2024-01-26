import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import { PostParams } from "../types/api/post";
import { getListReq } from "../api/postRequests";
import { useToastMsg } from "./useToastMsg";

type Props = {
  setPosts: Dispatch<SetStateAction<PostParams[]>>;
};

export const useGetAllPosts = (props: Props) => {
  const { setPosts } = props;
  const [loading, setLoading] = useState(false);
  const { showToastMsg } = useToastMsg();

  useEffect(() => {}, []);

  const getPosts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getListReq();
      setPosts(res.data);
    } catch (e) {
      showToastMsg({ status: "error", title: "投稿を取得できませんでした" });
    } finally {
      setLoading(false);
    }
  }, []);

  return { getPosts, loading };
};
