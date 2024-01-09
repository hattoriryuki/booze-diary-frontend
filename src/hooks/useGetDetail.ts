import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { Params } from "react-router-dom";

import { getDetailReq } from "../api/postRequest";
import { PostParams } from "../types/api/post";
import { User } from "../types/api/userAuth";
import { useGetUser } from "./useGetUser";

type Props = {
  setData: Dispatch<SetStateAction<PostParams | undefined>>;
  setUser: Dispatch<SetStateAction<User | undefined>>;
};

export const useGetDetail = (props: Props) => {
  const { setData, setUser } = props;
  const [loading, setLoading] = useState(false);
  const { getUser } = useGetUser(setUser);

  const getDetail = useCallback(async (query: Readonly<Params<string>>) => {
    setLoading(true);
    try {
      const res = await getDetailReq(query.id);
      setData(res.data);
      getUser(res.data.userId);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);
  return { getDetail, loading };
};
