import {
  FC,
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Box, Flex, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { useGetDetail } from "../../../hooks/useGetDetail";
import { useDisplayRecommend } from "../../../hooks/useDisplayRecommend";
import { PrimaryImage } from "../../atoms/PrimaryImage";
import { getDetailReq } from "../../../api/postRequest";
import { PostParams } from "../../../types/api/post";
import { LoginUserContext } from "../../../providers/LoginUserProvider";
import { EditPostModal } from "../../organisms/EditPostModal";
import { useUpdatePost } from "../../../hooks/useUpdatePost";
import { MenuIconButton } from "../../atoms/MenuIconButton";
import { CenterSpinner } from "../../atoms/CenterSpinner";
import { AvatarGroup } from "../../molecules/AvatarGroup";

export const Detail: FC = memo(() => {
  const [post, setPost] = useState<PostParams>();
  const [editFlag, setEditFlag] = useState(false);

  const recommend = useRef("");
  const query = useParams();
  const { getDetail, loading } = useGetDetail({
    setData: setPost,
    request: getDetailReq,
  });
  const { displayRecommend } = useDisplayRecommend();
  const { currentUser } = useContext(LoginUserContext);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { updatePost } = useUpdatePost({ post, setEditFlag, onClose });

  const labels = ["タイトル：", "量：", "価格：", "おすすめ度："];

  useEffect(() => {
    getDetail(query.id);
    if (editFlag) setEditFlag(false);
  }, [query, editFlag]);

  useEffect(() => {
    displayRecommend({ data: post, recommend });
    return () => {
      recommend.current = "";
    };
  }, [post]);

  const onClickEdit = useCallback(() => {
    onOpen();
  }, []);

  return (
    <>
      <Stack
        direction="column"
        align="center"
        mt={16}
        mb={8}
        h="calc(100vh - 120px)"
      >
        {loading ? (
          <CenterSpinner />
        ) : (
          <>
            <Box>
              <Flex
                align="end"
                justify="space-between"
                w={{ base: "300px", md: "600px" }}
              >
                <AvatarGroup
                  image={post?.user?.image}
                  userId={post?.userId}
                  userName={post?.user?.name}
                />
                {currentUser?.id === post?.user?.id && (
                  <Flex align="end">
                    <MenuIconButton
                      color="gray.600"
                      icon={faPen}
                      onClick={onClickEdit}
                    />
                    <MenuIconButton
                      color="red.500"
                      icon={faTrashCan}
                      onClick={onClickEdit}
                    />
                  </Flex>
                )}
              </Flex>
              <Box mt={4} boxShadow="lg" borderRadius="10px">
                <PrimaryImage
                  argument={{ image: post?.image, alt: "Drink image" }}
                  w={{ base: "300px", md: "600px" }}
                  h={{ base: "200px", md: "400px" }}
                />
              </Box>
            </Box>
            <Stack w={{ base: "300px", md: "600px" }} fontSize="large">
              <Flex mt={4} justify="space-around">
                <Box>
                  {labels.map((label) => (
                    <Text key={label} mb={2}>
                      {label}
                    </Text>
                  ))}
                </Box>
                <Box ml={20}>
                  <Text mb={2}>{post?.name}</Text>
                  <Text mb={2}>{post?.quantity || "登録されていません"}</Text>
                  <Text mb={2}>{post?.price || "登録されていません"}</Text>
                  <Text mb={2}>{recommend.current}</Text>
                </Box>
              </Flex>
            </Stack>
          </>
        )}
      </Stack>
      <EditPostModal
        isOpen={isOpen}
        onClose={onClose}
        post={post}
        updatePost={updatePost}
      />
    </>
  );
});
