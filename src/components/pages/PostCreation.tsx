import { FC, memo, useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import { PrimaryInputArea } from "../molecules/PrimaryInputArea";
import { UploadPhotoButton } from "../molecules/UploadPhotoButton";
import { Image } from "@chakra-ui/image";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { Button } from "@chakra-ui/button";
import { ImageBox } from "../atoms/ImageBox";

export const PostCreation: FC = memo(() => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

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
            value: title,
            onChange: (e) => setTitle(e.target.value),
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
          <Button
            bg="none"
            px={0}
            minW="none"
            fontSize="x-large"
            _hover={{ border: "1px", borderColor: "white" }}
          >
            <FontAwesomeIcon icon={faStar} />
          </Button>
          <Button
            bg="none"
            px={0}
            minW="none"
            fontSize="x-large"
            _hover={{ border: "1px", borderColor: "white" }}
          >
            <FontAwesomeIcon icon={faStar} />
          </Button>
          <Button
            bg="none"
            px={0}
            minW="none"
            fontSize="x-large"
            _hover={{ border: "1px", borderColor: "white" }}
          >
            <FontAwesomeIcon icon={faStar} />
          </Button>
          <Button
            bg="none"
            px={0}
            minW="none"
            fontSize="x-large"
            _hover={{ border: "1px", borderColor: "white" }}
          >
            <FontAwesomeIcon icon={faStar} />
          </Button>
          <Button
            bg="none"
            px={0}
            minW="none"
            fontSize="x-large"
            _hover={{ border: "1px", borderColor: "white" }}
          >
            <FontAwesomeIcon icon={faStar} />
          </Button>
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
          <UploadPhotoButton setPhoto={setImage} />
        </Box>
        {image ? (
          <Image src={image} h="150px" mt={6} />
        ) : (
          <ImageBox />
        )}
      </Flex>
      <PrimaryButton mt={10} px={8}>
        投稿
      </PrimaryButton>
    </Flex>
  );
});
