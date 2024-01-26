import { FC, memo } from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type Props = {
  image: string | undefined;
  userId: number | undefined;
  userName: string | undefined;
};

export const AvatarGroup: FC<Props> = memo((props) => {
  const { image, userId, userName } = props;
  return (
    <Flex align="center">
      <Avatar src={image} />
      <Link to={`/users/${userId}`}>
        <Text
          ml={2}
          cursor="pointer"
          _hover={{
            textDecoration: "underline",
            color: "blue.500",
          }}
        >
          {userName}
        </Text>
      </Link>
    </Flex>
  );
});
