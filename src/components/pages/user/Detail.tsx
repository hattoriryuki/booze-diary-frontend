import { FC, memo, useEffect, useState } from "react";
import { Avatar, Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useGetUser } from "../../../hooks/useGetUser";
import { UserDetailParams } from "../../../types/api/user";
import { PrimaryImage } from "../../atoms/PrimaryImage";
import { Link } from "react-router-dom";
import { StandOutBox } from "../../atoms/StandOutBox";

type Detail = Omit<UserDetailParams, "email">

export const Detail: FC = memo(() => {
  const [user, setUser] = useState<Detail>();
  const { getUser } = useGetUser(setUser);
  const query = useParams();

  useEffect(() => {
    getUser(query);
  }, [query]);

  return (
    <Flex direction="column" mt={16} h="100vh" align="center">
      <Heading fontSize="3xl" color="#0A2463" mt={6}>
        ユーザー紹介
      </Heading>
      <Box as={Flex} align="center" mt={8}>
        <Avatar size="lg" mb={2} mr={4} src={user?.image} />
        <Text align="center" fontSize="xl" fontWeight="bold">
          {user?.name}
        </Text>
      </Box>
      <Heading mt={8} fontSize={{ base: "sm", md: "xl" }}>
        過去の投稿
      </Heading>
      <SimpleGrid mt={2} columns={{ base: 1, md: 4 }} gap={4}>
        {user?.posts.map((data) => (
          <Link to={`/posts/${data.id}`}>
            <StandOutBox key={data.id}>
              <PrimaryImage
                argument={{ image: data.image, alt: "Drink image" }}
              />
              <Text align="center">{data.name}</Text>
            </StandOutBox>
          </Link>
        ))}
      </SimpleGrid>
    </Flex>
  );
});
