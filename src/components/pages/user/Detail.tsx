import { FC, memo, useEffect, useState } from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useGetUser } from "../../../hooks/useGetUser";
import { UserDetailParams } from "../../../types/api/user";
import { DetailTemplate } from "../../organisms/DetailTemplate";
import { usePagination } from "../../../hooks/usePagination";

type Detail = Omit<UserDetailParams, "email">;

export const Detail: FC = memo(() => {
  const [user, setUser] = useState<Detail>({
    id: 0,
    name: "",
    image: "",
    posts: [],
  });
  const { getUser, loading } = useGetUser(setUser);
  const query = useParams();
  const { currentPosts, paginate } = usePagination({
    posts: user.posts,
    itemsPerPage: 8,
  });

  useEffect(() => {
    getUser(query);
  }, [query]);

  return (
    <>
      <DetailTemplate
        title="ユーザー紹介"
        listItem={currentPosts}
        loading={loading}
        style={{ h: { base: "", md: "calc(100vh - 64px)" } }}
      >
        <Box as={Flex} align="center" mt={8}>
          <Avatar size="lg" mb={2} mr={4} src={user?.image} />
          <Text align="center" fontSize="xl" fontWeight="bold">
            {user?.name}
          </Text>
        </Box>
      </DetailTemplate>
      <Flex justify="center" my={4}>
        {paginate}
      </Flex>
    </>
  );
});
