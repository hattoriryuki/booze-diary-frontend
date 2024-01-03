import { MutableRefObject, useCallback } from "react";
import axios from "axios";

import { User } from "../types/api/userAuth";

type Props = {
  userRef: MutableRefObject<User[]>;
};

export const useGetAllUsers = (props: Props) => {
  const { userRef } = props;

  const getUsers = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_USER_CLIENT}`)
      .then((res) => (userRef.current = res.data))
      .catch(() => {
        console.log("User acquisition error");
      });
  }, []);
  return { getUsers };
};
