import { FC, memo, useContext, useEffect, useState } from "react";
import { Button } from "@chakra-ui/button";
import { Flex, Heading, Stack, SimpleGrid, Box } from "@chakra-ui/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router";

import { DrinkCard } from "../organisms/DrinkCard";
import { LoginUserContext } from "../../providers/LoginUserProvider";
import { useGetAllPosts } from "../../hooks/useGetAllPosts";
import { PostParams } from "../../types/api/post";

export const Index: FC = memo(() => {
  const [posts, setPosts] = useState<PostParams[]>([]);
  const { isSignedIn } = useContext(LoginUserContext);
  const navigate = useNavigate();
  const { getPosts } = useGetAllPosts({ setTargetPosts: setPosts });
  const page = [1, 2, 3, 4];

  useEffect(() => {
    getPosts();
  }, []);

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
      <SimpleGrid mt={4} columns={{ base: 1, md: 4 }} gap={4}>
        {posts.map((data) => (
          <Box key={data.id}>
            <DrinkCard
              image={data.image}
              username={data.username}
              name={data.name}
              avatar={data.avatar}
            />
          </Box>
        ))}
      </SimpleGrid>
      <Flex mt={10} mb={4}>
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
