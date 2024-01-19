import { Dispatch, SetStateAction, useCallback } from "react";

import { userReq } from "../api/userRequest";
import { UserDetailParams } from "../types/api/user";

type Props = {
  setUser: Dispatch<SetStateAction<UserDetailParams | undefined>>;
};

export const useGetProfile = (props: Props) => {
  const { setUser } = props;

  const getProfile = useCallback(async (id: number) => {
    try {
      const res = await userReq(id);
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return { getProfile };
};
