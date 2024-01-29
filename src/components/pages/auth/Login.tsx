import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";

import { PrimaryButton } from "../../atoms/buttons/PrimaryButton";
import { PasswordInput } from "../../molecules/PasswordInput";
import { useSignIn } from "../../../hooks/useSignIn";
import { PrimaryInputArea } from "../../molecules/PrimaryInputArea";

export const Login: FC = memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useSignIn();

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

  const onClickSignIn = useCallback(() => {
    signIn({ email, password });
  }, [email, password]);

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
        <PrimaryInputArea
          params={{
            title: "メールアドレス",
            type: "email",
            onChange: onChangeEmail,
            value: email,
          }}
        />
        <PasswordInput
          argument={{
            onChange: onChangePassword,
            value: password,
            title: "パスワード",
          }}
          mt={10}
        />
      </Flex>
      <PrimaryButton
        onClick={onClickSignIn}
        isDisabled={!email || !password ? true : false}
      >
        ログイン
      </PrimaryButton>
      <Box>
        <Link mr={8}>新規登録</Link>
        <Link>パスワードをお忘れの方</Link>
      </Box>
    </Flex>
  );
});
