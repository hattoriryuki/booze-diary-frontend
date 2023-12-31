import { FC, memo, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

import topImage from "../../assets/images/top.jpg";
import { DrinkCard } from "../organisms/DrinkCard";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { PostParams } from "../../types/api/post";
import { User } from "../../types/api/userAuth";
import { useGetAllPosts } from "../../hooks/useGetAllPosts";
import { useGetAllUsers } from "../../hooks/useGetAllUsers";

export const Top: FC = memo(() => {
  const [posts, setPosts] = useState<PostParams[]>([]);
  const [selectedPosts, setSelectedPosts] = useState<PostParams[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();
  const { getPosts } = useGetAllPosts({ setPosts: setPosts });
  const { getUsers } = useGetAllUsers({ setUsers: setUsers });

  useEffect(() => {
    getPosts();
    getUsers();
  }, []);

  useEffect(() => {
    const customPosts = posts.map((data) => {
      const targetUser = users.find((user) => user.id === data.userId);
      if (targetUser) {
        data.username = targetUser.name;
        data.avatar = targetUser.image;
      }
      return data;
    });
    setSelectedPosts(customPosts.slice(0, 8));
  }, [posts]);

  return (
    <Box w="100vw" overflow="scroll" pb={10}>
      <Image src={topImage} alt="Top image" w="100%" />
      <Box as={Flex} direction="column" align="center">
        <Heading mt={10} mb={6} fontSize={{ base: "4xl", md: "5xl" }}>
          BoozeDiaryへようこそ
        </Heading>
        <Box textAlign="center" fontSize={{ base: "medium", md: "xl" }} mb={4}>
          <Text>Booze Diaryはお酒好きのためのSNSです。</Text>
          <Text>あなたのお酒ライフがより良いものとなります。</Text>
        </Box>
        <Heading mt={4} fontSize={{ base: "sm", md: "2xl" }}>
          最新の投稿
        </Heading>
        <SimpleGrid
          mt={{ base: "1", md: "3" }}
          columns={{ base: 1, md: 4 }}
          gap={4}
        >
          {selectedPosts.map((data, index) => (
            <Box key={index}>
              <DrinkCard
                image={data.image}
                username={data.username}
                name={data.name}
                avatar={data.avatar}
              />
            </Box>
          ))}
        </SimpleGrid>
        <Button
          borderRadius="30px"
          w={{ base: "50%", md: "30%" }}
          mt={{ base: "2", md: "4" }}
          onClick={() => navigate("/index")}
        >
          全ての投稿
        </Button>
        <PrimaryButton mt={{ base: "10", md: "20" }}>はじめる</PrimaryButton>
      </Box>
    </Box>
  );
});
