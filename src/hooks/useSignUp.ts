import { useCallback, useContext } from "react";
import Cookies from "js-cookie";

import { signUpReq } from "../api/auth";
import { SignUpParams } from "../types/api/userAuth";
import { LoginUserContext } from "../providers/LoginUserProvider";
import { useNavigate } from "react-router";
import { useToastMsg } from "./useToastMsg";

export const useSignUp = () => {
  const { setIsSignedIn, setCurrentUser } = useContext(LoginUserContext);
  const navigate = useNavigate();
  const { showToastMsg } = useToastMsg();

  const signUp = useCallback(async (params: SignUpParams) => {
    try {
      const res = await signUpReq(params);
      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);
        setIsSignedIn(true);
        setCurrentUser(res.data.data);
        navigate("/");
        showToastMsg({ status: "success", title: "登録が完了しました" });
      }
    } catch (err) {
      showToastMsg({ status: "error", title: "新規登録に失敗しました" });
    }
  }, []);
  return { signUp };
};
