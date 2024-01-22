import {
  Dispatch,
  FC,
  SetStateAction,
  memo,
  useContext,
  useEffect,
  useState,
} from "react";
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
import { ArrowBackIcon } from "@chakra-ui/icons";

import { PrimaryButton } from "../atoms/PrimaryButton";
import { UserDetailParams } from "../../types/api/user";
import { UploadPhotoButton } from "../molecules/UploadPhotoButton";
import { updateProfileReq } from "../../api/profileRequest";
import { LoginUserContext } from "../../providers/LoginUserProvider";
import { useToastMsg } from "../../hooks/useToastMsg";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: UserDetailParams | undefined;
  setFlag: Dispatch<SetStateAction<boolean>>;
};

export const UserEditModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, user, setFlag } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const { setCurrentUser } = useContext(LoginUserContext);
  const { showToastMsg } = useToastMsg();

  useEffect(() => {
    if (!user) return;
    setName(user.name);
    setEmail(user.email);
    setImage(user.image);
  }, [user]);

  const onClickUpdate = async () => {
    if (!user) return;
    try {
      const res = await updateProfileReq(user?.id, { name, email, image });
      if (res.status === 200) {
        setFlag(true);
        onClose();
        setCurrentUser(res.data);
        showToastMsg({
          status: "success",
          title: "プロフィールの更新が完了しました",
        });
      }
    } catch (err) {
      showToastMsg({
        status: "error",
        title: "プロフィールの更新に失敗しました",
      });
    }
  };

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
