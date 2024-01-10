import { Dispatch, SetStateAction, useCallback } from "react";
import axios from "axios";
import { Params } from "react-router-dom";

import { UserDetailParams } from "../types/api/user";

type Props = Dispatch<SetStateAction<UserDetailParams | undefined>>;

export const useGetUser = (setUser: Props) => {
  const getUser = useCallback((query: Readonly<Params<string>>) => {
    if (setUser) {
      axios
        .get(`${process.env.REACT_APP_USER_CLIENT}/${query.id}`)
        .then((res) => setUser(res.data))
        .catch(() => {
          console.log("User acquisition error");
        });
    }
  }, []);
  return { getUser };
};
