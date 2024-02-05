import { FC, memo } from "react";
import { Flex, Link, Stack, Text, useDisclosure } from "@chakra-ui/react";

import { PrimaryModal } from "../PrimaryModal";
import { TermsContent } from "../../molecules/TermsContent";

export const Footer: FC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Flex
        as={"footer"}
        h="56px"
        w="100%"
        bg="white"
        direction="column"
        align="center"
        justify="center"
      >
        <Stack direction="row" gap={{ base: 4, md: 12 }}>
          <Link onClick={() => onOpen()}>利用規約</Link>
          <Link>プライバシーポリシー</Link>
          <Link>お問い合せ</Link>
        </Stack>
        <Text color="gray.600">
          &copy; 2023 BoozeDiary. All rights reserved
        </Text>
      </Flex>
      <PrimaryModal title="利用規約" isOpen={isOpen} onClose={onClose}>
        <TermsContent />
      </PrimaryModal>
    </>
  );
});
