import { FC, memo } from "react";
import { Flex, Link, Stack, Text } from "@chakra-ui/react";

export const Footer: FC = memo(() => {
  return (
    <Flex
      as={"footer"}
      h="56px"
      w="100%"
      bgColor="white"
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Stack direction="row" gap={{ base: 4, md: 12 }}>
        <Link>利用規約</Link>
        <Link>プライバシーポリシー</Link>
        <Link>お問い合せ</Link>
      </Stack>
      <Text color="gray.600">&copy; 2023 BoozeDiary. All rights reserved</Text>
    </Flex>
  );
});
