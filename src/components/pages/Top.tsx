import { FC, memo, useCallback, useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

import topImage from "../../assets/images/top.jpg";
import { DrinkCard } from "../organisms/DrinkCard";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { PostParams } from "../../types/api/post";
import { useGetAllPosts } from "../../hooks/useGetAllPosts";
import { useToastMsg } from "../../hooks/useToastMsg";
import { LoginUserContext } from "../../providers/LoginUserProvider";
import { GuestLoginReq } from "../../api/auth";

export const Top: FC = memo(() => {
  const [posts, setPosts] = useState<PostParams[]>([]);
  const [selectedPosts, setSelectedPosts] = useState<PostParams[]>([]);
  const navigate = useNavigate();
  const { getPosts, loading } = useGetAllPosts({ setPosts });
  const { showToastMsg } = useToastMsg();
  const { setIsSignedIn, setCurrentUser } = useContext(LoginUserContext);

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    setSelectedPosts(posts.slice(0, 8));
  }, [posts]);

  const onClickGuestLogin = useCallback(async () => {
    try {
      const res = await GuestLoginReq();
      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);
        setIsSignedIn(true);
        setCurrentUser(res.data);
        navigate("/posts");
        showToastMsg({
          status: "success",
          title: "ゲストとしてログインしました",
        });
      }
    } catch (err) {
      showToastMsg({ status: "error", title: "ゲストログインに失敗しました" });
    }
  }, []);

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
        <Heading mt={10} fontSize={{ base: "sm", md: "xl" }}>
          最新の投稿
        </Heading>
        {loading ? (
          <Center h="400px">
            <Spinner />
          </Center>
        ) : (
          <SimpleGrid
            mt={{ base: "1", md: "3" }}
            columns={{ base: 1, md: 4 }}
            gap={4}
          >
            {selectedPosts.map((data) => (
              <Box key={data.id}>
                <DrinkCard
                  id={data.id}
                  image={data.image}
                  username={data.user?.name}
                  name={data.name}
                  avatar={data.user?.image}
                  userId={data.userId}
                />
              </Box>
            ))}
          </SimpleGrid>
        )}
        <Button
          borderRadius="30px"
          w={{ base: "50%", md: "30%" }}
          mt={{ base: "2", md: "4" }}
          onClick={() => navigate("/posts")}
        >
          全ての投稿
        </Button>
        <PrimaryButton
          onClick={onClickGuestLogin}
          mt={{ base: "10", md: "20" }}
        >
          ゲストログイン
        </PrimaryButton>
      </Box>
    </Box>
  );
});
