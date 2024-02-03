import { FC, memo, useContext, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { LoginUserContext } from "../../../providers/LoginUserProvider";
import { UserDetailParams } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/buttons/PrimaryButton";
import { useGetDetail } from "../../../hooks/useGetDetail";
import { profileReq } from "../../../api/profileRequests";
import { DetailTemplate } from "../../organisms/DetailTemplate";
import { EditUserModal } from "../../organisms/EditUserModal";
import { useUpdateProfile } from "../../../hooks/useUpdateProfile";
import { usePagination } from "../../../hooks/usePagination";

export const Profile: FC = memo(() => {
  const [user, setUser] = useState<UserDetailParams>({
    id: 0,
    name: "",
    image: "",
    email: "",
    posts: [],
  });
  const [editFlag, setEditFlag] = useState(false);

  const { currentUser } = useContext(LoginUserContext);
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { getDetail, loading } = useGetDetail({
    setData: setUser,
    request: profileReq,
  });
  const { updateProfile } = useUpdateProfile({ user, setEditFlag, onClose });
  const { paginate, currentPosts } = usePagination({
    posts: user?.posts,
    itemsPerPage: 8,
  });

  useEffect(() => {
    if (!currentUser) navigate("/login");
  }, []);

  useEffect(() => {
    if (!currentUser) return;
    getDetail(currentUser.id);
    if (editFlag) setEditFlag(false);
  }, [editFlag]);

  return (
    <>
      <Box>
        <DetailTemplate
          title="マイページ"
          listItem={currentPosts}
          loading={loading}
          style={{ h: { base: "", md: "100vh" } }}
        >
          <Box as={Flex} align="center" mt={8}>
            <Avatar
              size={{ base: "md", md: "xl" }}
              mb={2}
              mr={4}
              src={user.image}
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
                  {user.name}
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
                  {user.email}
                </Text>
              </Flex>
            </Stack>
            <PrimaryButton ml={{ base: 4, md: 20 }} onClick={onOpen}>
              編集
            </PrimaryButton>
          </Box>
        </DetailTemplate>
        <Flex justify="center" mb={4}>
          {paginate}
        </Flex>
      </Box>
      <EditUserModal
        isOpen={isOpen}
        onClose={onClose}
        user={user}
        updateProfile={updateProfile}
      />
    </>
  );
});
