import { FC, memo, useContext, useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import Cookies from "js-cookie";

import { PasswordInput } from "../molecules/PasswordInput";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { PrimaryInputArea } from "../molecules/PrimaryInputArea";
import { UploadPhotoButton } from "../molecules/UploadPhotoButton";
import { SignUpParams } from "../../types/api/userAuth";
import { signUpReq } from "../../api/auth";
import { LoginUserContext } from "../../providers/LoginUserProvider";
import { useNavigate } from "react-router";
import { useToastMsg } from "../../hooks/useToastMsg";

export const SignUp: FC = memo(() => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [icon, setIcon] = useState("");
  const { setIsSignedIn, setCurrentUser } = useContext(LoginUserContext);
  const navigate = useNavigate();
  const { showToastMsg } = useToastMsg();

  const onClickSignUp = async () => {
    const params: SignUpParams = {
      name,
      email,
      password,
      passwordConfirm,
      image: icon.replace(/data:.*\/.*;base64,/, ""),
    };

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
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="space-around"
      mt={16}
      pb={10}
      w="100%"
      h="calc(100vh)"
    >
      <Heading color="#0a2463" mt={{ base: "4", md: "8" }}>
        新規登録
      </Heading>
      <Flex direction="column" align="center" w="100%">
        <Text
          color="#0A2463"
          fontSize="small"
          textAlign="end"
          w={{ base: "90%", md: "50%" }}
        >
          *必須
        </Text>
        <PrimaryInputArea
          params={{
            title: "ニックネーム*",
            type: "text",
            onChange: (e) => setName(e.target.value),
            value: name,
          }}
        />
        <PrimaryInputArea
          mt={10}
          params={{
            title: "メールアドレス*",
            type: "email",
            onChange: (e) => setEmail(e.target.value),
            value: email,
          }}
        />
        <PasswordInput
          mt={10}
          argument={{
            onChange: (e) => setPassword(e.target.value),
            value: password,
            title: "パスワード*",
          }}
        />
        <PasswordInput
          mt={10}
          argument={{
            onChange: (e) => setPasswordConfirm(e.target.value),
            value: passwordConfirm,
            title: "パスワード（確認用）*",
          }}
        />
        <Box w={{ base: "90%", md: "50%" }} mt={10} pb={5}>
          <Text color="#0A2463">アイコン</Text>
          <Flex justify="space-between" mt={2}>
            <UploadPhotoButton setPhoto={setIcon} />
            <Avatar size="lg" src={icon} />
          </Flex>
        </Box>
      </Flex>
      <PrimaryButton onClick={onClickSignUp}>新規登録</PrimaryButton>
    </Flex>
  );
});
