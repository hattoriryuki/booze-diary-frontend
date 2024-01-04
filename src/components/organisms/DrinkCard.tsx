import { FC, memo } from "react";
import { Avatar, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  image: string;
  username: string | undefined;
  name: string;
  avatar?: string;
};

export const DrinkCard: FC<Props> = memo((props) => {
  const { id, image, username, name, avatar } = props;

  return (
    <Box
      position="relative"
      borderRadius="10px"
      cursor="pointer"
      transition="all .3s"
      boxShadow="lg"
      _hover={{
        position: "relative",
        top: "-3px",
        boxShadow: "0 2px 3px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Link to={`/posts/${id}`}>
        <Image
          src={image}
          alt="Drink image"
          w="300px"
          h="200px"
          borderRadius="10px"
          aspectRatio="16 / 9"
          objectFit="cover"
        />
      </Link>
      <Flex
        position="absolute"
        bottom={0}
        align="center"
        justify="center"
        bg="rgb(74 77 81 / 55%)"
        w="300px"
        h="40px"
        borderBottomRadius="10px"
      >
        <Flex position="absolute" top="-16px" left={2} alignItems="center">
          <Avatar size="sm" src={avatar} />
          <Text
            ml={2}
            color="white"
            fontSize="sm"
            _hover={{ textDecoration: "underline", color: "blue.500" }}
          >
            {username}
          </Text>
        </Flex>
        <Heading fontSize="medium" color="white">
          {name}
        </Heading>
      </Flex>
    </Box>
  );
});
