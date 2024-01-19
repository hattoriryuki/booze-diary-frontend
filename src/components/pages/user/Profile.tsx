import { FC, memo, useContext, useEffect } from "react";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { StandOutBox } from "../../atoms/StandOutBox";
import { PrimaryImage } from "../../atoms/PrimaryImage";
import { LoginUserContext } from "../../../providers/LoginUserProvider";
import { UserDetailParams } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/PrimaryButton";
import { useGetDetail } from "../../../hooks/useGetDetail";
import { userReq } from "../../../api/userRequest";

export const Profile: FC = memo(() => {
  const { currentUser } = useContext(LoginUserContext);
  const { getDetail, data } = useGetDetail({ request: userReq });

  useEffect(() => {
    if (!currentUser) return;
    const cast = String(currentUser.id);
    getDetail(cast);
  }, []);

  return (
    <Box mt={16}>
      <Flex
        direction="column"
        mt={16}
        h="100vh"
        align="center"
        overflowY="scroll"
      >
        <Heading fontSize="3xl" color="#0A2463" mt={6}>
          マイページ
        </Heading>
        <Box as={Flex} align="center" mt={8}>
          <Avatar
            size={{ base: "md", md: "xl" }}
            mb={2}
            mr={4}
            src={currentUser?.image}
          />
          <Stack>
            <Flex align="center">
              <Text fontSize="sm" mr={3}>
                Name:
              </Text>
              <Text
                align="center"
                fontSize={{ base: "lg", md: "2xl" }}
                fontWeight="bold"
              >
                {currentUser?.name}
              </Text>
            </Flex>
            <Flex align="center">
              <Text fontSize="sm" mr={3}>
                Email:
              </Text>
              <Text
                align="center"
                fontSize={{ base: "lg", md: "2xl" }}
                fontWeight="bold"
              >
                {currentUser?.email}
              </Text>
            </Flex>
          </Stack>
          <PrimaryButton ml={{ base: 4, md: 20 }}>編集</PrimaryButton>
        </Box>
        <Heading mt={8} mb={2} fontSize={{ base: "sm", md: "xl" }}>
          過去の投稿
        </Heading>
        <SimpleGrid mt={2} columns={{ base: 1, md: 4 }} gap={4}>
          {data?.posts.map((val: UserDetailParams) => (
            <Link to={`/posts/${val.id}`} key={val.id}>
              <StandOutBox>
                <PrimaryImage
                  argument={{ image: val.image, alt: "Drink image" }}
                />
                <Text align="center">{val.name}</Text>
              </StandOutBox>
            </Link>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
});
