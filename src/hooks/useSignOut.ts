import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { signOutReq } from "../api/auth";
import { LoginUserContext } from "../providers/LoginUserProvider";
import { useToastMsg } from "./useToastMsg";

export const useSignOut = () => {
  const { setIsSignedIn, setCurrentUser } = useContext(LoginUserContext);
  const { showToastMsg } = useToastMsg();
  const navigate = useNavigate();

  const signOut = useCallback(async () => {
    try {
      const res = await signOutReq();
      Cookies.remove("_access_token");
      Cookies.remove("_client");
      Cookies.remove("_uid");
      setIsSignedIn(false);
      setCurrentUser(undefined);
      navigate("/");
      showToastMsg({ status: "info", title: "ログアウトしました" });
    } catch (err) {
      showToastMsg({ status: "error", title: "ログアウトに失敗しました" });
    }
  }, []);
  return { signOut };
};
