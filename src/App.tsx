import {
  Box,
  ChakraProvider,
  Flex,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import { theme } from "./theme/theme";
import logoImage from "./assets/images/logo.png";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex as={"header"} h="64px" justify="space-between" alignItems="center">
        <Image
          src={logoImage}
          alt="Logo image"
          boxShadow="none"
          cursor="pointer"
        />
        <Box>
          <Link mr={4}>ログイン</Link>
          <Link mr={4}>新規登録</Link>
        </Box>
      </Flex>
      <Flex
        as={"footer"}
        h="56px"
        position="fixed"
        bottom={0}
        left="50%"
        transform="translate(-50%, 0)"
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Stack direction="row" gap={12}>
          <Link>利用規約</Link>
          <Link>プライバシーポリシー</Link>
          <Link>お問い合せ</Link>
        </Stack>
        <Text color="gray.600">
          &copy; 2023 BoozeDiary. All rights reserved
        </Text>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
