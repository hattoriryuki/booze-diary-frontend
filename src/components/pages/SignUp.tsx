import { ChangeEvent, FC, memo, useRef, useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { Input } from "@chakra-ui/input";

import { PasswordInput } from "../molecules/PasswordInput";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { PrimaryInputArea } from "../molecules/PrimaryInputArea";

export const SignUp: FC = memo(() => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [icon, setIcon] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClickSignUp = () => {};

  const onClickFileSelect = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  const onChangeFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length <= 0) return;
    deployment(files);
  };

  const deployment = (files: FileList) => {
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setIcon(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
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
            <PrimaryButton onClick={onClickFileSelect}>
              ファイルを選択
              <Input
                ref={inputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={onChangeFileInput}
              />
            </PrimaryButton>
            <Avatar size="lg" src={icon} />
          </Flex>
        </Box>
      </Flex>
      <PrimaryButton onClick={onClickSignUp}>新規登録</PrimaryButton>
    </Flex>
  );
});
