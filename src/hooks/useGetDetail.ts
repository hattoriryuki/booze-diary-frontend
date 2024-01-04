import { Dispatch, SetStateAction, useCallback } from "react";
import { Params } from "react-router-dom";

import { getDetailReq } from "../api/postRequest";
import { PostParams } from "../types/api/post";

type Props = {
  setData: Dispatch<SetStateAction<PostParams | undefined>>;
};

export const useGetDetail = (props: Props) => {
  const { setData } = props;

  const getDetail = useCallback(async (query: Readonly<Params<string>>) => {
    try {
      const res = await getDetailReq(query.id);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return { getDetail };
};
