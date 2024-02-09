import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { GuestLoginReq } from "../api/auth";
import { LoginUserContext } from "../providers/LoginUserProvider";
import { useToastMsg } from "./useToastMsg";

export const useGuestLogin = () => {
  const { setIsSignedIn, setCurrentUser } = useContext(LoginUserContext);
  const navigate = useNavigate();
  const { showToastMsg } = useToastMsg();

  const guestLogin = useCallback(async () => {
    try {
      const res = await GuestLoginReq();
      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);
        setIsSignedIn(true);
        setCurrentUser(res.data);
        navigate("/posts");
        showToastMsg({
          status: "success",
          title: "ゲストとしてログインしました",
        });
      }
    } catch (err) {
      showToastMsg({ status: "error", title: "ゲストログインに失敗しました" });
    }
  }, []);
  return { guestLogin };
};
