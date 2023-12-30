import { FC, memo } from "react";
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

export const drinkData = [
  {
    image: topImage,
    username: "お酒太郎",
    name: "ワイルドターキー",
  },
  {
    image: topImage,
    username: "二郎",
    name: "ジャックダニエル",
  },
  {
    image: topImage,
    username: "三郎",
    name: "メーカーズマーク",
  },
  {
    image: topImage,
    username: "四郎",
    name: "オールドクロウ",
  },
  {
    image: topImage,
    username: "四郎",
    name: "オールドクロウ",
  },
  {
    image: topImage,
    username: "四郎",
    name: "オールドクロウ",
  },
];

export const Top: FC = memo(() => {
  const navigate = useNavigate();

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
          mt={{ base: "1", md: "2" }}
          columns={{ base: 1, md: 4 }}
          gap={4}
        >
          {drinkData.map((data, index) => (
            <Box key={index}>
              <DrinkCard
                image={data.image}
                username={data.username}
                name={data.name}
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
