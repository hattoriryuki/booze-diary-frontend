import { FC, memo, useContext, useEffect, useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useNavigate } from "react-router";

import { PrimaryInputArea } from "../../molecules/PrimaryInputArea";
import { UploadPhotoButton } from "../../molecules/UploadPhotoButton";
import { PrimaryButton } from "../../atoms/buttons/PrimaryButton";
import { ImageBox } from "../../atoms/ImageBox";
import { StarButtons } from "../../molecules/StarButtons";
import { LoginUserContext } from "../../../providers/LoginUserProvider";
import { useCreatePost } from "../../../hooks/useCreatePost";

export const Creation: FC = memo(() => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [recommend, setRecommend] = useState(0);
  const { isSignedIn, currentUser } = useContext(LoginUserContext);
  const navigate = useNavigate();
  const { createPost } = useCreatePost();

  useEffect(() => {
    if (!isSignedIn) navigate("/login");
  }, [isSignedIn]);

  const onClickPost = () => {
    if (!currentUser) return;
    createPost({
      name,
      quantity,
      price,
      image,
      recommend,
    });
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="space-around"
      mt={16}
      pb={10}
      w="100%"
      h="100vh"
    >
      <Heading color="#0a2463" mt={{ base: "4", md: "8" }}>
        投稿する
      </Heading>
      <Flex direction="column" w="100%" align="center">
        <Text
          color="#0A2463"
          fontSize="small"
          textAlign="end"
          w={{ base: "90%", md: "50%" }}
        >
          *必須
        </Text>
        <PrimaryInputArea
          params={{
            title: "タイトル*",
            type: "text",
            value: name,
            onChange: (e) => setName(e.target.value),
          }}
        />
        <PrimaryInputArea
          mt={8}
          params={{
            title: "量",
            type: "text",
            value: quantity,
            onChange: (e) => setQuantity(e.target.value),
          }}
        />
        <PrimaryInputArea
          mt={8}
          params={{
            title: "価格",
            type: "text",
            value: price,
            onChange: (e) => setPrice(e.target.value),
          }}
        />
      </Flex>
      <Box
        as={Flex}
        mt={8}
        w={{ base: "90%", md: "50%" }}
        justify="space-between"
        align="center"
      >
        <Text>おすすめ度*</Text>
        <Flex>
          <StarButtons setRecommend={setRecommend} />
        </Flex>
      </Box>
      <Flex
        mt={8}
        w={{ base: "90%", md: "50%" }}
        h="200px"
        justify="space-between"
      >
        <Box>
          <Text>写真*</Text>
          <UploadPhotoButton argument={{ setPhoto: setImage }} />
        </Box>
        {image ? <Image src={image} h="150px" mt={6} /> : <ImageBox />}
      </Flex>
      <PrimaryButton mt={10} px={8} onClick={onClickPost}>
        投稿
      </PrimaryButton>
    </Flex>
  );
});
