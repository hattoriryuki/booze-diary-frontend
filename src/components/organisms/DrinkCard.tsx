import { FC, memo } from "react";
import { Avatar, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

type Props = {
  image: string;
  username: string;
  name: string;
  avatar?: string;
};

export const DrinkCard: FC<Props> = memo((props) => {
  const { image, username, name, avatar } = props;

  return (
    <Box position="relative" cursor="pointer">
      <Image
        src={image}
        alt="Drink image"
        w={{ base: "300px", md: "500px" }}
        borderRadius="10px"
      />
      <Flex
        position="absolute"
        bottom={0}
        align="center"
        justify="center"
        bg="rgb(74 77 81 / 55%)"
        w={{ base: "300px", md: "500px" }}
        h="50px"
        borderBottomRadius="10px"
      >
        <Flex position="absolute" top="-16px" left={2} alignItems="center">
          <Avatar size="sm" name={avatar} />
          <Text
            ml={2}
            color="white"
            fontSize={{ base: "medium", md: "large" }}
            _hover={{ textDecoration: "underline", color: "blue.500" }}
          >
            {username}
          </Text>
        </Flex>
        <Heading fontSize="large" color="white">
          {name}
        </Heading>
      </Flex>
    </Box>
  );
});
