import { FC, memo, useEffect, useState } from "react";
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
import { usePagination } from "../../../hooks/usePagination";

export const Index: FC = memo(() => {
  const [posts, setPosts] = useState<PostParams[]>([]);
  const { getPosts, loading } = useGetAllPosts({ setPosts });
  const { paginate, currentPosts } = usePagination({ posts, itemsPerPage: 12 });

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
          minH="calc(100vh - 300px)"
        >
          {currentPosts.map((data) => (
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
        {paginate}
      </Flex>
    </Stack>
  );
});
