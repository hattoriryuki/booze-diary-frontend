import { FC, memo } from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

import topImage from "../../assets/images/top.jpg";
import { DrinkCard } from "../organisms/DrinkCard";

export const Top: FC = memo(() => {
  return (
    <Box w="100vw" overflow="scroll" pb={10}>
      <Image src={topImage} alt="Top image" w="100%" />
      <Box as={Flex} direction="column" alignItems="center">
        <Heading mt={10} mb={6}>
          BoozeDiaryへようこそ
        </Heading>
        <Box
          textAlign="center"
          fontSize={{ base: "medium", md: "larger" }}
          mb={4}
        >
          <Text>Booze Diaryはお酒好きのためのSNSです。</Text>
          <Text>あなたのお酒ライフがより良いものとなります。</Text>
        </Box>
        <Flex
          justify="center"
          border="1px solid"
          borderColor="gray.800"
          p={4}
          w={{ base: "90%", md: "60%" }}
          position="relative"
        >
          <DrinkCard
            image={topImage}
            username="お酒太郎"
            name="ワイルドターキー"
          />
        </Flex>
        <Button bgColor="#4D4B4B" color="white" mt={10}>
          はじめる
        </Button>
      </Box>
    </Box>
  );
});
