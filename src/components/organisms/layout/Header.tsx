import { FC, memo, useCallback, useContext } from "react";
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import logoImage from "../../../assets/images/logo.png";
import { LoginUserContext } from "../../../providers/LoginUserProvider";
import { useSignOut } from "../../../hooks/useSignOut";

export const Header: FC = memo(() => {
  const navigate = useNavigate();
  const { isSignedIn } = useContext(LoginUserContext);
  const { signOut } = useSignOut();

  const onClickLogin = useCallback(() => navigate("/login"), []);
  const onClickSignUp = useCallback(() => navigate("/signup"), []);
  const onClickTop = useCallback(() => navigate("/"), []);
  const onClickSignOut = useCallback(() => signOut(), []);

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
        onClick={onClickTop}
      />
      <Box>
        {isSignedIn ? (
          <Link mr={4} onClick={onClickSignOut}>
            ログアウト
          </Link>
        ) : (
          <>
            <Link mr={4} onClick={onClickLogin}>
              ログイン
            </Link>
            <Link mr={4} onClick={onClickSignUp}>
              新規登録
            </Link>
          </>
        )}
      </Box>
    </Flex>
  );
});
