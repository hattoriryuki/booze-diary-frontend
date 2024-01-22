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
import { profileReq } from "../../../api/profileRequest";
import { DetailTemplate } from "../../organisms/DetailTemplate";
import { UserEditModal } from "../../organisms/UserEditModal";
import { useUpdateProfile } from "../../../hooks/useUpdateProfile";

export const Profile: FC = memo(() => {
  const [user, setUser] = useState<UserDetailParams>();
  const [editFlag, setEditFlag] = useState(false);
  const { currentUser } = useContext(LoginUserContext);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { getDetail, loading } = useGetDetail({
    setData: setUser,
    request: profileReq,
  });
  const { updateProfile } = useUpdateProfile({ user, setEditFlag, onClose });

  useEffect(() => {
    if (!currentUser) return;
    getDetail(currentUser.id);
    if (editFlag) setEditFlag(false);
  }, [editFlag]);

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
            src={user?.image}
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
                {user?.name}
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
                {user?.email}
              </Text>
            </Flex>
          </Stack>
          <PrimaryButton ml={{ base: 4, md: 20 }} onClick={onClickEdit}>
            編集
          </PrimaryButton>
        </Box>
      </DetailTemplate>
      <UserEditModal
        isOpen={isOpen}
        onClose={onClose}
        user={user}
        updateProfile={updateProfile}
      />
    </>
  );
});
