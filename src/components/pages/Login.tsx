import { FC, memo, useCallback, useState } from "react";
import {
  Box,
  BoxProps,
  Button,
  Flex,
  Heading,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/PrimaryButton";
import { PrimaryInput } from "../atoms/PrimaryInput";

export const Login: FC = memo(() => {
  const [show, setShow] = useState(false);

  const StyledBox: FC<BoxProps> = useCallback(({ ...props }) => {
    return <Box w={{ base: "90%", md: "40%" }} {...props} />;
  }, []);

  const onClickShowPassword = useCallback(() => setShow(!show), [show]);

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
        <StyledBox>
          <Text>メールアドレス</Text>
          <PrimaryInput type="email" />
        </StyledBox>
        <StyledBox mt={10}>
          <Text>パスワード</Text>
          <InputGroup>
            <PrimaryInput type={show ? "text" : "password"} />
            <InputRightElement w="3.5rem">
              <Button
                size="sm"
                h="1.75rem"
                bg={show ? "#e1e5e8" : "#F3F3F3"}
                color="gray.600"
                _hover={{ color: "gray.500" }}
                onClick={onClickShowPassword}
              >
                表示
              </Button>
            </InputRightElement>
          </InputGroup>
        </StyledBox>
      </Flex>
      <PrimaryButton>ログイン</PrimaryButton>
      <Box>
        <Link mr={8}>新規登録</Link>
        <Link>パスワードをお忘れの方</Link>
      </Box>
    </Flex>
  );
});
