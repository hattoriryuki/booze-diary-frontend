import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Image,
  Stack,
  Text,
  TextProps,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { PostParams } from "../../types/api/post";
import { useGetDetail } from "../../hooks/useGetDetail";
import { User } from "../../types/api/userAuth";

export const Detail: FC = memo(() => {
  const [data, setData] = useState<PostParams>();
  const [user, setUser] = useState<User>();
  const recommend = useRef("");
  const query = useParams();
  const { getDetail } = useGetDetail({ setData: setData, setUser: setUser });

  const labels = ["タイトル：", "量：", "価格：", "おすすめ度："];
  const StyledText = useCallback(({ ...props }: TextProps) => {
    return <Text mb={2} {...props} />;
  }, []);

  useEffect(() => {
    getDetail(query);
  }, [query]);

  useEffect(() => {
    if (!data) return;
    for (let i = 0; i < data.recommend; i++) {
      recommend.current += "★";
    }
    if (data.recommend < 5) {
      for (let i = 0; i < 5 - data.recommend; i++) {
        recommend.current += "☆";
      }
    }
    return () => {
      recommend.current = "";
    };
  }, [data]);

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
          <Avatar src={user?.image} />
          <Text
            ml={2}
            cursor="pointer"
            _hover={{ textDecoration: "underline", color: "blue.500" }}
          >
            {user?.name}
          </Text>
        </Flex>
        <Box mt={4} boxShadow="lg" borderRadius="10px">
          <Image
            src={data?.image}
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
            <StyledText>{data?.name}</StyledText>
            <StyledText>{data?.quantity || "登録されていません"}</StyledText>
            <StyledText>{data?.price || "登録されていません"}</StyledText>
            <StyledText>{recommend.current}</StyledText>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
});
