import { FC, memo } from "react";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import TestImage from "../../assets/images/top.jpg";

export const Profile: FC = memo(() => {
  const data = {
    id: 1,
    image: TestImage,
    username: "お酒太郎",
    name: "",
    userId: 1,
  };

  return (
    <Flex direction="column" mt={16} h="100vh" align="center">
      <Heading fontSize="3xl" color="#0A2463" mt={6}>
        ユーザー紹介
      </Heading>
      <Box as={Flex} align="center" mt={8}>
        <Avatar size="lg" mb={2} mr={4} />
        <Text align="center" fontSize="xl" fontWeight="bold">
          お酒太郎
        </Text>
      </Box>
      <Heading mt={8} fontSize={{ base: "sm", md: "xl" }}>
        過去の投稿
      </Heading>
      <SimpleGrid
        mt={2}
        columns={{ base: 1, md: 4 }}
        gap={4}
        minH={{ base: "none", md: "calc(100vh - 300px)" }}
      >
        <Box>
          <Image src={TestImage} w="300px" h="200px" />
          <Text align="center">ウイスキー</Text>
        </Box>
        <Box>
          <Image src={TestImage} w="300px" h="200px" />
          <Text align="center">ウイスキー</Text>
        </Box>
        <Box>
          <Image src={TestImage} w="300px" h="200px" />
          <Text align="center">ウイスキー</Text>
        </Box>
        <Box>
          <Image src={TestImage} w="300px" h="200px" />
          <Text align="center">ウイスキー</Text>
        </Box>
        <Box>
          <Image src={TestImage} w="300px" h="200px" />
          <Text align="center">ウイスキー</Text>
        </Box>
        <Box>
          <Image src={TestImage} w="300px" h="200px" />
          <Text align="center">ウイスキー</Text>
        </Box>
        <Box>
          <Image src={TestImage} w="300px" h="200px" />
          <Text align="center">ウイスキー</Text>
        </Box>
        <Box>
          <Image src={TestImage} w="300px" h="200px" />
          <Text align="center">ウイスキー</Text>
        </Box>
      </SimpleGrid>
    </Flex>
  );
});
