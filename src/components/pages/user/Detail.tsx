import { FC, memo, useEffect, useState } from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useGetUser } from "../../../hooks/useGetUser";
import { UserDetailParams } from "../../../types/api/user";
import { DetailTemplate } from "../../organisms/DetailTemplate";

type Detail = Omit<UserDetailParams, "email">;

export const Detail: FC = memo(() => {
  const [user, setUser] = useState<Detail>();
  const { getUser, loading } = useGetUser(setUser);
  const query = useParams();

  useEffect(() => {
    getUser(query);
  }, [query]);

  return (
    <DetailTemplate
      title="ユーザー紹介"
      listItem={user?.posts}
      loading={loading}
    >
      <Box as={Flex} align="center" mt={8}>
        <Avatar size="lg" mb={2} mr={4} src={user?.image} />
        <Text align="center" fontSize="xl" fontWeight="bold">
          {user?.name}
        </Text>
      </Box>
    </DetailTemplate>
  );
});
