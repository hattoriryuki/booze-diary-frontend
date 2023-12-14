import { FC, memo, useCallback } from "react";
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import logoImage from "../../../assets/images/logo.png";

export const Header: FC = memo(() => {
  const navigate = useNavigate();

  const onClickLogin = useCallback(() => navigate("/login"), []);

  return (
    <Flex
      as={"header"}
      h="64px"
      w="100%"
      position="fixed"
      top={0}
      bg="white"
      justify="space-between"
      align="center"
      zIndex="10"
    >
      <Image
        src={logoImage}
        alt="Logo image"
        shadow="none"
        cursor="pointer"
      />
      <Box>
        <Link mr={4} onClick={onClickLogin}>
          ログイン
        </Link>
        <Link mr={4}>新規登録</Link>
      </Box>
    </Flex>
  );
});
