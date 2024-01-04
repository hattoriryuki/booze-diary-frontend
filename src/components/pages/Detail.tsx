import { FC, memo } from "react";
import { Avatar, Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

import SampleImage from "../../assets/images/top.jpg";

export const Detail: FC = memo(() => {
  return (
    <Box
      as={Stack}
      direction="column"
      align="center"
      mt={16}
      mb={8}
      h="calc(100vh - 120px)"
    >
      <Box>
        <Flex align="center" w={{ base: "300px", md: "600px" }}>
          <Avatar />
          <Text ml={2}>お酒太郎</Text>
        </Flex>
        <Box mt={4}>
          <Image
            src={SampleImage}
            alt="Drink image"
            w={{ base: "300px", md: "600px" }}
            h={{ base: "200px", md: "400px" }}
            borderRadius="10px"
            aspectRatio="16 / 9"
            objectFit="cover"
          />
        </Box>
      </Box>
      <Stack w={{ base: "300px", md: "600px" }} fontSize="large">
        <Flex mt={4} justify="space-around">
          <Box>
            <Text mb={2}>タイトル：</Text>
            <Text mb={2}>量：</Text>
            <Text mb={2}>価格：</Text>
            <Text mb={2}>おすすめ度：</Text>
          </Box>
          <Box ml={20}>
            <Text mb={2}>一番搾り</Text>
            <Text mb={2}>3000ml</Text>
            <Text mb={2}>300円</Text>
            <Text mb={2}>★★★★★</Text>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
});
