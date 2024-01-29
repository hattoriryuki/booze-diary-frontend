import { FC, memo, useCallback, useEffect, useState } from "react";
import {
  Avatar,
  Flex,
  FormControl,
  FormLabel,
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

import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { UserDetailParams } from "../../types/api/user";
import { UploadPhotoButton } from "../molecules/UploadPhotoButton";
import { ArrowBackButton } from "../atoms/buttons/ArrowBackButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: UserDetailParams | undefined;
  updateProfile: (name: string, email: string, image: string) => void;
};

export const EditUserModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, user, updateProfile } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (!user) return;
    setName(user.name);
    setEmail(user.email);
    setImage(user.image);
  }, [user]);

  const onClickUpdate = useCallback(() => {
    updateProfile(name, email, image);
  }, [name, email, image]);

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
                <UploadPhotoButton
                  argument={{ setPhoto: setImage }}
                  size="sm"
                />
                <Avatar size="xl" src={image} />
              </Flex>
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Flex w="100%" justify="space-between">
            <ArrowBackButton func={onClose} />
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});
