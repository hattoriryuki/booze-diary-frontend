import { FC, memo, useEffect, useState } from "react";
import {
  Avatar,
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

import { PrimaryButton } from "../atoms/PrimaryButton";
import { UserDetailParams } from "../../types/api/user";
import { UploadPhotoButton } from "../molecules/UploadPhotoButton";
import { ArrowBackIcon } from "@chakra-ui/icons";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: UserDetailParams | undefined;
};

export const UserEditModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, user } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    if (!user) return;
    setName(user.name);
    setEmail(user.email);
    setIcon(user.image);
  }, [user]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>プロフィール編集</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            <FormControl>
              <FormLabel>名前:</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Email:</FormLabel>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>アイコン:</FormLabel>
              <Flex justify="space-between">
                <UploadPhotoButton argument={{ setPhoto: setIcon }} size="sm" />
                <Avatar size="xl" src={icon} />
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
            <PrimaryButton>更新</PrimaryButton>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});
