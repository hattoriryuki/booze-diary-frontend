import { FC, memo } from "react";
import { Box, Flex, Image, Link } from "@chakra-ui/react";

import logoImage from "../../../assets/images/logo.png";

export const Header: FC = memo(() => {
  return (
    <Flex as={"header"} h="64px" w="100%" position="fixed" top={0} bgColor="white" justify="space-between" alignItems="center">
      <Image
        src={logoImage}
        alt="Logo image"
        boxShadow="none"
        cursor="pointer"
      />
      <Box>
        <Link mr={4}>ログイン</Link>
        <Link mr={4}>新規登録</Link>
      </Box>
    </Flex>
  );
});
