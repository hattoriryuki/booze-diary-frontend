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
    <Box>
      <Image src={image} alt="Swiper image" w="600px" />
      <Flex
        position="absolute"
        bottom={4}
        alignItems="center"
        justify="center"
        bgColor="rgb(74 77 81 / 55%)"
        w={{ base: "calc(100% - 32px)", md: "600px" }}
        h="50px"
      >
        <Flex position="absolute" top="-16px" left={2} alignItems="center">
          <Avatar size="sm" name={avatar} />
          <Text ml={2} color="white" fontSize={{ base: "medium", md: "large" }}>
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
