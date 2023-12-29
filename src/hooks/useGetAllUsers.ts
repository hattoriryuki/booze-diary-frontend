import { Dispatch, SetStateAction, useCallback } from "react";
import axios from "axios";

import { User } from "../types/api/userAuth";

type Props = {
  setUsers: Dispatch<SetStateAction<User[]>>;
};

export const useGetAllUsers = (props: Props) => {
  const { setUsers } = props;

  const getUsers = useCallback(() => {
    axios
      .get("http://localhost:3001/api/v1/users")
      .then((res) => setUsers(res.data))
      .catch(() => {
        console.log("User acquisition error");
      });
  }, []);
  return { getUsers };
};
