import {
  ChangeEvent,
  FC,
  memo,
  useCallback,
  useContext,
  useState,
} from "react";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

import { PrimaryButton } from "../atoms/PrimaryButton";
import { PrimaryInput } from "../atoms/PrimaryInput";
import { PasswordInput } from "../molecules/PasswordInput";
import { SignInParams } from "../../theme/api/userAuth";
import { signIn } from "../../api/auth";
import { LoginUserContext } from "../../providers/LoginUserProvider";
import { useToastMsg } from "../../hooks/useToastMsg";

export const Login: FC = memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showToastMsg } = useToastMsg();

  const { setIsSignedIn, setCurrentUser } = useContext(LoginUserContext);
  const navigate = useNavigate();

  const onChangeEmail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    [email]
  );

  const onChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [password]
  );

  const onClickSignIn = async () => {
    const params: SignInParams = {
      email,
      password,
    };

    try {
      const res = await signIn(params);
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
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="space-around"
      mt={16}
      w="100%"
      h="calc(100vh - 120px)"
    >
      <Heading color="#0a2463" mt={{ base: "12", md: "8" }}>
        ログイン
      </Heading>
      <Flex direction="column" align="center" w="100%">
        <Box w={{ base: "90%", md: "50%" }}>
          <Text>メールアドレス</Text>
          <PrimaryInput
            type="email"
            argument={{ onChange: onChangeEmail, value: email }}
          />
        </Box>
        <PasswordInput
          argument={{ onChange: onChangePassword, value: password }}
          mt={10}
        />
      </Flex>
      <PrimaryButton onClick={onClickSignIn}>ログイン</PrimaryButton>
      <Box>
        <Link mr={8}>新規登録</Link>
        <Link>パスワードをお忘れの方</Link>
      </Box>
    </Flex>
  );
});
