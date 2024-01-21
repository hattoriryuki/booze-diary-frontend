import { FC, memo, useContext, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { LoginUserContext } from "../../../providers/LoginUserProvider";
import { UserDetailParams } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/PrimaryButton";
import { useGetDetail } from "../../../hooks/useGetDetail";
import { userReq } from "../../../api/userRequest";
import { DetailTemplate } from "../../organisms/DetailTemplate";
import { UserEditModal } from "../../organisms/UserEditModal";

export const Profile: FC = memo(() => {
  const [user, setUser] = useState<UserDetailParams>();
  const { currentUser } = useContext(LoginUserContext);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { getDetail, loading } = useGetDetail({
    setData: setUser,
    request: userReq,
  });

  useEffect(() => {
    if (!currentUser) return;
    getDetail(currentUser.id);
  }, []);

  const onClickEdit = () => onOpen();

  return (
    <>
      <DetailTemplate
        title="マイページ"
        listItem={user?.posts}
        loading={loading}
      >
        <Box as={Flex} align="center" mt={8}>
          <Avatar
            size={{ base: "md", md: "xl" }}
            mb={2}
            mr={4}
            src={currentUser?.image}
          />
          <Stack>
            <Flex align="center">
              <Text fontSize="sm" mr={3}>
                名前:
              </Text>
              <Text
                align="center"
                fontSize={{ base: "lg", md: "2xl" }}
                fontWeight="bold"
              >
                {currentUser?.name}
              </Text>
            </Flex>
            <Flex align="center">
              <Text fontSize="sm" mr={3}>
                Email:
              </Text>
              <Text
                align="center"
                fontSize={{ base: "lg", md: "2xl" }}
                fontWeight="bold"
              >
                {currentUser?.email}
              </Text>
            </Flex>
          </Stack>
          <PrimaryButton ml={{ base: 4, md: 20 }} onClick={onClickEdit}>
            編集
          </PrimaryButton>
        </Box>
      </DetailTemplate>
      <UserEditModal isOpen={isOpen} onClose={onClose} user={user} />
    </>
  );
});
