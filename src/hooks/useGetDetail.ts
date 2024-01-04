import { Dispatch, SetStateAction, useCallback } from "react";
import { Params } from "react-router-dom";
import axios from "axios";

import { getDetailReq } from "../api/postRequest";
import { PostParams } from "../types/api/post";
import { User } from "../types/api/userAuth";

type Props = {
  setData: Dispatch<SetStateAction<PostParams | undefined>>;
  setUser: Dispatch<SetStateAction<User | undefined>>;
};

export const useGetDetail = (props: Props) => {
  const { setData, setUser } = props;

  const getDetail = useCallback(async (query: Readonly<Params<string>>) => {
    try {
      const res = await getDetailReq(query.id);
      setData(res.data);
      selectUser(res.data.userId);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const selectUser = useCallback((id: number) => {
    axios
      .get(`${process.env.REACT_APP_USER_CLIENT}/${id}`)
      .then((res) => setUser(res.data))
      .catch(() => {
        console.log("User acquisition error");
      });
  }, []);
  return { getDetail };
};
