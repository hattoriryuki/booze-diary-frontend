import { FC, memo } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  keyframes,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const animation = keyframes`
  from {
    box-shadow: inset -3px 0px 0px -1px #888
  }
  to {
    box-shadow: inset -3px 0px 0px -1px transparent
  }
`;

export const Page404: FC = memo(() => {
  const navigate = useNavigate();

  const myAnimation = `${animation} .5s alternate infinite`;

  return (
    <Container h="100vh" color="#888">
      <Box
        as={Flex}
        h="100%"
        direction="column"
        justify="center"
        align="center"
      >
        <Heading
          fontSize="6xl"
          fontFamily="Lato, sans-serif"
          mb={8}
          pr={4}
          animation={myAnimation}
        >
          Error 404
        </Heading>
        <Link onClick={() => navigate("/")}>トップへ</Link>
      </Box>
    </Container>
  );
});
