import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Center,
  Flex,
  Spinner,
  Stack,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";

import { useGetDetail } from "../../../hooks/useGetDetail";
import { useDisplayRecommend } from "../../../hooks/useDisplayRecommend";
import { PrimaryImage } from "../../atoms/PrimaryImage";
import { getDetailReq } from "../../../api/postRequest";
import { PostParams } from "../../../types/api/post";

export const Detail: FC = memo(() => {
  const [post, setPost] = useState<PostParams>();
  const recommend = useRef("");
  const query = useParams();
  const { getDetail, loading } = useGetDetail({
    setData: setPost,
    request: getDetailReq,
  });
  const { displayRecommend } = useDisplayRecommend();

  const labels = ["タイトル：", "量：", "価格：", "おすすめ度："];
  const StyledText = useCallback(({ ...props }: TextProps) => {
    return <Text mb={2} {...props} />;
  }, []);

  useEffect(() => {
    getDetail(query.id);
  }, [query]);

  useEffect(() => {
    displayRecommend({ data: post, recommend });
    return () => {
      recommend.current = "";
    };
  }, [post]);

  return (
    <Box
      as={Stack}
      direction="column"
      align="center"
      mt={16}
      mb={8}
      h="calc(100vh - 120px)"
    >
      {loading ? (
        <Center h="100%">
          <Spinner />
        </Center>
      ) : (
        <>
          <Box>
            <Flex align="center" w={{ base: "300px", md: "600px" }}>
              <Avatar src={post?.user?.image} />
              <Link to={`/users/${post?.userId}`}>
                <Text
                  ml={2}
                  cursor="pointer"
                  _hover={{ textDecoration: "underline", color: "blue.500" }}
                >
                  {post?.user?.name}
                </Text>
              </Link>
            </Flex>
            <Box mt={4} boxShadow="lg" borderRadius="10px">
              <PrimaryImage
                argument={{ image: post?.image, alt: "Drink image" }}
                w={{ base: "300px", md: "600px" }}
                h={{ base: "200px", md: "400px" }}
              />
            </Box>
          </Box>
          <Stack w={{ base: "300px", md: "600px" }} fontSize="large">
            <Flex mt={4} justify="space-around">
              <Box>
                {labels.map((label) => (
                  <StyledText key={label}>{label}</StyledText>
                ))}
              </Box>
              <Box ml={20}>
                <StyledText>{post?.name}</StyledText>
                <StyledText>
                  {post?.quantity || "登録されていません"}
                </StyledText>
                <StyledText>{post?.price || "登録されていません"}</StyledText>
                <StyledText>{recommend.current}</StyledText>
              </Box>
            </Flex>
          </Stack>
        </>
      )}
    </Box>
  );
});
