import { FC, memo } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

import { PasswordInput } from "../molecules/PasswordInput";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { PrimaryInputArea } from "../molecules/PrimaryInputArea";
import { Avatar } from "@chakra-ui/avatar";

export const SignUp: FC = memo(() => {
  const onChangeName = () => {};
  const onChangeEmail = () => {};
  const onChangePassword = () => {};
  const onChangePasswordConfirm = () => {};
  const onClickSignUp = () => {};

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
            onChange: onChangeName,
            value: "",
          }}
        />
        <PrimaryInputArea
          mt={10}
          params={{
            title: "メールアドレス*",
            type: "Email",
            onChange: onChangeEmail,
            value: "",
          }}
        />
        <PasswordInput
          argument={{
            onChange: onChangePassword,
            value: "",
            title: "パスワード*",
          }}
          mt={10}
        />
        <PasswordInput
          argument={{
            onChange: onChangePasswordConfirm,
            value: "",
            title: "パスワード（確認用）*",
          }}
          mt={10}
        />
        <Box w={{ base: "90%", md: "50%" }} mt={10} pb={5}>
          <Text color="#0A2463">アイコン</Text>
          <Flex justify="space-between" mt={2}>
            <PrimaryButton>ファイルを選択</PrimaryButton>
            <Avatar size="lg" />
          </Flex>
        </Box>
      </Flex>
      <PrimaryButton onClick={onClickSignUp}>新規登録</PrimaryButton>
    </Flex>
  );
});
