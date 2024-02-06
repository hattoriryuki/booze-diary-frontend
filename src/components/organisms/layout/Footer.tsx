import { FC, memo } from "react";
import { Flex, Link, Stack, Text, useDisclosure } from "@chakra-ui/react";

import { PrimaryModal } from "../PrimaryModal";
import { TermsContent } from "../../molecules/TermsContent";
import { PrivacyContent } from "../../molecules/PrivacyContent";

export const Footer: FC = memo(() => {
  const {
    isOpen: TermsIsOpen,
    onClose: TermsOnClose,
    onOpen: TermsOnOpen,
  } = useDisclosure();
  const {
    isOpen: PrivacyIsOpen,
    onClose: PrivacyOnClose,
    onOpen: PrivacyOnOpen,
  } = useDisclosure();

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
          <Link onClick={TermsOnOpen}>利用規約</Link>
          <Link onClick={PrivacyOnOpen}>プライバシーポリシー</Link>
          <Link>お問い合せ</Link>
        </Stack>
        <Text color="gray.600">
          &copy; 2023 BoozeDiary. All rights reserved
        </Text>
      </Flex>
      <PrimaryModal
        title="利用規約"
        isOpen={TermsIsOpen}
        onClose={TermsOnClose}
      >
        <TermsContent />
      </PrimaryModal>
      <PrimaryModal
        title="プライバシーポリシー"
        isOpen={PrivacyIsOpen}
        onClose={PrivacyOnClose}
      >
        <PrivacyContent />
      </PrimaryModal>
    </>
  );
});
