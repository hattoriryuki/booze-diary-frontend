import { FC, memo, useCallback, useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";

import { PasswordInput } from "../../molecules/PasswordInput";
import { PrimaryButton } from "../../atoms/PrimaryButton";
import { PrimaryInputArea } from "../../molecules/PrimaryInputArea";
import { UploadPhotoButton } from "../../molecules/UploadPhotoButton";
import { useSignUp } from "../../../hooks/useSignUp";

export const SignUp: FC = memo(() => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [icon, setIcon] = useState("");
  const { signUp } = useSignUp();

  const onClickSignUp = useCallback(() => {
    signUp({
      name,
      email,
      password,
      passwordConfirmation,
      image: icon,
    });
  }, [name, email, password, passwordConfirmation, icon]);

  return (
    <Flex
      direction="column"
      align="center"
      justify="space-around"
      mt={16}
      pb={10}
      w="100%"
      h="100vh"
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
            onChange: (e) => setPasswordConfirmation(e.target.value),
            value: passwordConfirmation,
            title: "パスワード（確認用）*",
          }}
        />
        <Box w={{ base: "90%", md: "50%" }} mt={10} pb={5}>
          <Text color="#0A2463">アイコン</Text>
          <Flex justify="space-between" mt={2}>
            <UploadPhotoButton argument={{ setPhoto: setIcon }} />
            <Avatar size="lg" src={icon} />
          </Flex>
        </Box>
      </Flex>
      <PrimaryButton onClick={onClickSignUp}>新規登録</PrimaryButton>
    </Flex>
  );
});
