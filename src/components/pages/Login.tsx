import { FC, memo, useCallback } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  InputProps,
  Link,
  Text,
} from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/PrimaryButton";

export const Login: FC = memo(() => {
  const StyledInput: FC<InputProps> = useCallback(({ ...props }) => {
    return <Input shadow="md" bg="#F3F3F3" border="none" {...props} />;
  }, []);

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
        <Box w={{ base: "90%", md: "40%" }}>
          <Text>メールアドレス</Text>
          <StyledInput type="email" />
        </Box>
        <Box w={{ base: "90%", md: "40%" }} mt={10}>
          <Text>パスワード</Text>
          <StyledInput type="password" />
        </Box>
      </Flex>
      <PrimaryButton>ログイン</PrimaryButton>
      <Box>
        <Link mr={8}>新規登録</Link>
        <Link>パスワードをお忘れの方</Link>
      </Box>
    </Flex>
  );
});
