import { Dispatch, SetStateAction, useCallback, useState } from "react";
import axios from "axios";
import { Params } from "react-router-dom";

import { UserDetailParams } from "../types/api/user";

type Detail = Omit<UserDetailParams, "email">;
type Props = Dispatch<SetStateAction<Detail>>;

export const useGetUser = (setUser: Props) => {
  const [loading, setLoading] = useState(false);

  const getUser = useCallback((query: Readonly<Params<string>>) => {
    if (setUser) {
      setLoading(true);
      axios
        .get(`${process.env.REACT_APP_USER_CLIENT}/${query.id}`)
        .then((res) => {
          sortPosts(res.data);
          setUser(res.data);
        })
        .catch(() => console.log("User acquisition error"))
        .finally(() => setLoading(false));
    }
  }, []);

  const sortPosts = useCallback((data: Detail | undefined) => {
    if (!data) return;
    data.posts.sort((x, y) => {
      if (x.created_at < y.created_at) {
        return 1;
      }
      if (x.created_at > y.created_at) {
        return -1;
      }
      return 0;
    });
  }, []);
  return { getUser, loading };
};
