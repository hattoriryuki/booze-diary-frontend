import { FC, memo } from "react";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/PrimaryButton";
import { PrimaryInput } from "../atoms/PrimaryInput";
import { PasswordInput } from "../molecules/PasswordInput";

export const Login: FC = memo(() => {
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
          <PrimaryInput type="email" />
        </Box>
        <PasswordInput mt={10} />
      </Flex>
      <PrimaryButton>ログイン</PrimaryButton>
      <Box>
        <Link mr={8}>新規登録</Link>
        <Link>パスワードをお忘れの方</Link>
      </Box>
    </Flex>
  );
});
