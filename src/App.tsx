import { Box, ChakraProvider, Flex, Image, Link } from "@chakra-ui/react";

import { theme } from "./theme/theme";
import logoImage from "./assets/images/logo.png";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex as={"header"} h="64px" justify="space-between" alignItems="center">
        <Image src={logoImage} alt="Logo image" boxShadow="none" cursor="pointer" />
        <Box>
          <Link mr={4}>ログイン</Link>
          <Link mr={4}>新規登録</Link>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
