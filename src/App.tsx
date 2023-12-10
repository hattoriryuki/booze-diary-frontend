import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "./theme/theme";
import { Header } from "./components/organisms/layout/Header";
import { Footer } from "./components/organisms/layout/Footer";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
