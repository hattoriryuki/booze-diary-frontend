import { FC, ReactNode, memo } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/buttons/PrimaryButton";

type Props = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const PrimaryModal: FC<Props> = memo((props) => {
  const { title, isOpen, onClose, children } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      scrollBehavior="inside"
      size="4xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#0a2463" fontSize="2xl">
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody overflow="scroll">{children}</ModalBody>
        <ModalFooter>
          <PrimaryButton onClick={onClose}>Close</PrimaryButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});
