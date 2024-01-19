import { Dispatch, SetStateAction, useCallback } from "react";
import axios from "axios";
import { Params } from "react-router-dom";

import { UserDetailParams } from "../types/api/user";

type Detail = Omit<UserDetailParams, "email">
type Props = Dispatch<SetStateAction<Detail | undefined>>;

export const useGetUser = (setUser: Props) => {
  const getUser = useCallback((query: Readonly<Params<string>>) => {
    if (setUser) {
      axios
        .get(`${process.env.REACT_APP_USER_CLIENT}/${query.id}`)
        .then((res) => {
          sortPosts(res.data);
          setUser(res.data);
        })
        .catch(() => {
          console.log("User acquisition error");
        });
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
  return { getUser };
};