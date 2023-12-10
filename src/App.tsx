import { Button, ChakraProvider } from "@chakra-ui/react";

import { theme } from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button>ボタン</Button>
    </ChakraProvider>
  );
}

export default App;
