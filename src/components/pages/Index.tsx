import { FC, memo, useCallback, useContext } from "react";
import { Button } from "@chakra-ui/button";
import { Flex, Heading, Stack, Wrap, WrapItem } from "@chakra-ui/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router";

import { drinkData } from "./Top";
import { DrinkCard } from "../organisms/DrinkCard";
import { LoginUserContext } from "../../providers/LoginUserProvider";

export const Index: FC = memo(() => {
  const { isSignedIn } = useContext(LoginUserContext);
  const navigate = useNavigate();
  const page = [1, 2, 3, 4];

  return (
    <Stack h="calc(100vh - 120px)" align="center" mt={16} overflowY="scroll">
      <Flex position="relative" w="100%" justify="center" align="center" mt={8}>
        <Heading fontSize="2xl">みんなの投稿</Heading>
        {isSignedIn && (
          <Button
            position="absolute"
            right={4}
            fontSize="x-large"
            bg="none"
            zIndex={10}
            p={0}
            _hover={{ bg: "none", color: "gray.500" }}
            onClick={() => navigate("/new")}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </Button>
        )}
      </Flex>
      <Wrap w="90%" justify="center" mt={4}>
        {drinkData.map((data, index) => (
          <WrapItem key={index}>
            <DrinkCard
              image={data.image}
              username={data.username}
              name={data.name}
            />
          </WrapItem>
        ))}
      </Wrap>
      <Flex mt={8} mb={4}>
        {page.map((num) => (
          <Button
            key={num}
            bg="none"
            borderRadius="50%"
            _hover={{ bg: "#E2E8F0" }}
          >
            {num}
          </Button>
        ))}
      </Flex>
    </Stack>
  );
});
