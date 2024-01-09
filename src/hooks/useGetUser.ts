import { Dispatch, SetStateAction, useCallback } from "react";
import axios from "axios";

import { User } from "../types/api/userAuth";

type Props = Dispatch<SetStateAction<User | undefined>>;

export const useGetUser = (setUser: Props) => {
  const getUser = useCallback((id: number) => {
    if (setUser) {
      axios
        .get(`${process.env.REACT_APP_USER_CLIENT}/${id}`)
        .then((res) => setUser(res.data))
        .catch(() => {
          console.log("User acquisition error");
        });
    }
  }, []);
  return { getUser };
};
