import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { StarButtons } from "../molecules/StarButtons";
import { PostParams, UpdateParams } from "../../types/api/post";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  post: PostParams | undefined;
  updatePost: (props: UpdateParams) => void;
};

export const EditPostModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, post, updatePost } = props;
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [recommend, setRecommend] = useState(0);
  const starRef = useRef([false, false, false, false, false]);

  useEffect(() => {
    if (!post) return;
    for (let i = 0; i < post.recommend; i++) {
      starRef.current[i] = true;
    }
    setName(post.name);
    setQuantity(post.quantity);
    setPrice(post.price);
    setRecommend(post.recommend);
  }, [post]);

  const onClickUpdate = useCallback(() => {
    updatePost({ name, quantity, price, recommend });
  }, [name, quantity, price, recommend]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>投稿の編集</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            <FormControl>
              <FormLabel>タイトル:</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>量:</FormLabel>
              <Input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>価格:</FormLabel>
              <Input value={price} onChange={(e) => setPrice(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>おすすめ度:</FormLabel>
              <Flex>
                <StarButtons setRecommend={setRecommend} starRef={starRef} />
              </Flex>
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Flex w="100%" justify="space-between">
            <IconButton
              aria-label="Page back button"
              icon={<ArrowBackIcon />}
              bg="none"
              border="1px"
              borderColor="gray.300"
              _hover={{ bg: "blackAlpha.100" }}
              onClick={onClose}
            />
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});
