import { Dispatch, SetStateAction, useCallback, useContext } from "react";

import { updateProfileReq } from "../api/profileRequests";
import { UserDetailParams } from "../types/api/user";
import { LoginUserContext } from "../providers/LoginUserProvider";
import { useToastMsg } from "./useToastMsg";

type Props = {
  user: UserDetailParams | undefined;
  setEditFlag: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
};

export const useUpdateProfile = (props: Props) => {
  const { user, setEditFlag, onClose } = props;
  const { setCurrentUser } = useContext(LoginUserContext);
  const { showToastMsg } = useToastMsg();

  const updateProfile = useCallback(
    async (name: string, email: string, image: string) => {
      if (!user) return;
      try {
        const res = await updateProfileReq(user?.id, { name, email, image });
        if (res.status === 200) {
          setEditFlag(true);
          setCurrentUser(res.data);
          onClose();
          showToastMsg({
            status: "success",
            title: "プロフィールの更新が完了しました",
          });
        }
      } catch (err) {
        showToastMsg({
          status: "error",
          title: "プロフィールの更新に失敗しました",
        });
      }
    },
    [user]
  );
  return { updateProfile };
};
