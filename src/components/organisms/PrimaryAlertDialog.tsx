import { FC, memo, useRef } from "react";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  AlertDialogContent,
} from "@chakra-ui/react";

type Props = {
  func: () => void;
  isOpen: boolean;
  onClose: () => void;
};

export const PrimaryAlertDialog: FC<Props> = memo((props) => {
  const { func, isOpen, onClose } = props;
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader>Delete Post</AlertDialogHeader>
        <AlertDialogBody>投稿を削除してもよろしいですか？</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose} mr={3}>
            キャンセル
          </Button>
          <Button colorScheme="red" onClick={func}>
            削除
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
});
