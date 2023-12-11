import { FC, memo } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import topImage from "../../assets/images/top.jpg";

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
          <Box>
            <Image src={topImage} alt="Swiper image" w="600px" />
            <Flex
              position="absolute"
              bottom={4}
              alignItems="center"
              justify="center"
              bgColor="rgb(74 77 81 / 55%)"
              w={{ base: "calc(100% - 32px)", md: "600px" }}
              h="50px"
            >
              <Flex
                position="absolute"
                top="-16px"
                left={2}
                alignItems="center"
              >
                <Avatar size="sm" />
                <Text
                  ml={2}
                  color="white"
                  fontSize={{ base: "medium", md: "large" }}
                >
                  お酒太郎
                </Text>
              </Flex>
              <Heading fontSize="large" color="white">
                ワイルドターキー
              </Heading>
            </Flex>
          </Box>
        </Flex>
        <Button bgColor="#4D4B4B" color="white" mt={10}>
          はじめる
        </Button>
      </Box>
    </Box>
  );
});
