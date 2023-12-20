import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/PrimaryButton";
import { PrimaryInput } from "../atoms/PrimaryInput";
import { PasswordInput } from "../molecules/PasswordInput";
import { useSignIn } from "../../hooks/useSignIn";

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
