import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "./theme/theme";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { Top } from "./components/pages/Top";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <DefaultLayout>
        <Top />
      </DefaultLayout>
    </ChakraProvider>
  );
}

export default App;
