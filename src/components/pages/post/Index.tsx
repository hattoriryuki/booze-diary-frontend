import { FC, memo, useEffect, useState } from "react";
import { Button } from "@chakra-ui/button";
import { Spinner } from "@chakra-ui/react";
import {
  Flex,
  Heading,
  Stack,
  SimpleGrid,
  Box,
  Center,
} from "@chakra-ui/layout";

import { DrinkCard } from "../../organisms/DrinkCard";
import { useGetAllPosts } from "../../../hooks/useGetAllPosts";
import { PostParams } from "../../../types/api/post";

export const Index: FC = memo(() => {
  const [posts, setPosts] = useState<PostParams[]>([]);
  const { getPosts, loading } = useGetAllPosts({ setPosts });
  const page = [1, 2, 3, 4];

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Stack align="center" mt={16} overflowY="scroll">
      <Flex position="relative" w="100%" justify="center" align="center" mt={8}>
        <Heading fontSize="2xl">みんなの投稿</Heading>
      </Flex>
      {loading ? (
        <Center h={{ base: "400px", md: "calc(100vh - 300px)" }}>
          <Spinner />
        </Center>
      ) : (
        <SimpleGrid
          mt={4}
          columns={{ base: 1, md: 4 }}
          gap={4}
          minH={{ base: "none", md: "calc(100vh - 300px)" }}
        >
          {posts.map((data) => (
            <Box key={data.id}>
              <DrinkCard
                id={data.id}
                image={data.image}
                username={data.user?.name}
                name={data.name}
                avatar={data.user?.image}
                userId={data.userId}
              />
            </Box>
          ))}
        </SimpleGrid>
      )}
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
