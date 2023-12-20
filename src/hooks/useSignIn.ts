import { useCallback, useContext } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

import { LoginUserContext } from "../providers/LoginUserProvider";
import { SignInParams } from "../types/api/userAuth";
import { signInReq } from "../api/auth";
import { useToastMsg } from "./useToastMsg";

type Props = {
  email: string;
  password: string;
};

export const useSignIn = () => {
  const { setIsSignedIn, setCurrentUser } = useContext(LoginUserContext);
  const navigate = useNavigate();
  const { showToastMsg } = useToastMsg();

  const signIn = useCallback(async (props: Props) => {
    const { email, password } = props;

    const params: SignInParams = {
      email,
      password,
    };
    try {
      const res = await signInReq(params);
      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);
        setIsSignedIn(true);
        setCurrentUser(res.data.data);
        navigate("/");
        showToastMsg({ status: "success", title: "ログインしました" });
      }
    } catch (err) {
      showToastMsg({ status: "error", title: "ログインに失敗しました" });
    }
  }, []);
  return { signIn };
};
