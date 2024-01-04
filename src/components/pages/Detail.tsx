import { FC, memo, useCallback } from "react";
import {
  Avatar,
  Box,
  Flex,
  Image,
  Stack,
  Text,
  TextProps,
} from "@chakra-ui/react";

import SampleImage from "../../assets/images/top.jpg";

export const Detail: FC = memo(() => {
  const labels = ["タイトル：", "量：", "価格：", "おすすめ度："];
  const StyledText = useCallback(({ ...props }: TextProps) => {
    return <Text mb={2} {...props} />;
  }, []);

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
          <Text
            ml={2}
            _hover={{ textDecoration: "underline", color: "blue.500" }}
          >
            お酒太郎
          </Text>
        </Flex>
        <Box mt={4} boxShadow="xl" borderRadius="10px">
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
            {labels.map((label) => (
              <StyledText key={label} mb={2}>
                {label}
              </StyledText>
            ))}
          </Box>
          <Box ml={20}>
            <StyledText mb={2}>一番搾り</StyledText>
            <StyledText mb={2}>3000ml</StyledText>
            <StyledText mb={2}>300円</StyledText>
            <StyledText mb={2}>★★★★★</StyledText>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
});
