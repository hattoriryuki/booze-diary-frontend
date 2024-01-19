import { FC, memo, useContext, useEffect, useState } from "react";
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
import Cookies from "js-cookie";

import { StandOutBox } from "../../atoms/StandOutBox";
import { PrimaryImage } from "../../atoms/PrimaryImage";
import { LoginUserContext } from "../../../providers/LoginUserProvider";
import { client } from "../../../api/client";
import { UserDetailParams } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/PrimaryButton";

export const Profile: FC = memo(() => {
  const [user, setUser] = useState<UserDetailParams>();
  const { currentUser } = useContext(LoginUserContext);

  const getUserReq = (id: number) => {
    return client.get(`/profiles/${id}`, {
      headers: {
        "access-token": Cookies.get("_access_token"),
        client: Cookies.get("_client"),
        uid: Cookies.get("_uid"),
      },
    });
  };

  const getProfile = async (id: number) => {
    try {
      const res = await getUserReq(id);
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!currentUser) return;
    getProfile(currentUser?.id);
  }, []);

  return (
    <Box>
      <Flex direction="column" mt={16} h="100vh" align="center">
        <Heading fontSize="3xl" color="#0A2463" mt={6}>
          マイページ
        </Heading>
        <Box as={Flex} align="center" mt={8}>
          <Avatar size="2xl" mb={2} mr={4} src={currentUser?.image} />
          <Stack>
            <Flex align="center">
              <Text fontSize="sm" mr={3}>
                Name:
              </Text>
              <Text align="center" fontSize="2xl" fontWeight="bold">
                {currentUser?.name}
              </Text>
            </Flex>
            <Flex align="center">
              <Text fontSize="sm" mr={3}>
                Email:
              </Text>
              <Text align="center" fontSize="2xl" fontWeight="bold">
                {currentUser?.email}
              </Text>
            </Flex>
          </Stack>
          <PrimaryButton ml={20}>編集</PrimaryButton>
        </Box>
        <Heading mt={8} fontSize={{ base: "sm", md: "xl" }}>
          過去の投稿
        </Heading>
        <SimpleGrid mt={2} columns={{ base: 1, md: 4 }} gap={4}>
          {user?.posts.map((data) => (
            <Link to={`/posts/${data.id}`}>
              <StandOutBox key={data.id}>
                <PrimaryImage
                  argument={{ image: data.image, alt: "Drink image" }}
                />
                <Text align="center">{data.name}</Text>
              </StandOutBox>
            </Link>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
});
