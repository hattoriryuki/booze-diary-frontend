import { FC, memo, useCallback, useContext } from "react";
import { Box, Flex, Image, Text, Link as ChakraLink } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import logoImage from "../../../assets/images/logo.png";
import { LoginUserContext } from "../../../providers/LoginUserProvider";
import { HamburgerMenu } from "../HamburgerMenu";

export const Header: FC = memo(() => {
  const navigate = useNavigate();
  const { isSignedIn } = useContext(LoginUserContext);

  const onClickLogin = useCallback(() => navigate("/login"), []);
  const onClickSignUp = useCallback(() => navigate("/signup"), []);
  const onClickTop = useCallback(() => navigate("/"), []);

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
          <Flex align="center" gap={7}>
            <ChakraLink>
              <Link to="/">トップ</Link>
            </ChakraLink>
            <ChakraLink>
              <Link to="/posts">ギャラリー</Link>
            </ChakraLink>
            <ChakraLink>
              <Link to="/posts/new">
                <Flex align="center">
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <Text ml={1}>投稿する</Text>
                </Flex>
              </Link>
            </ChakraLink>
            <HamburgerMenu />
          </Flex>
        ) : (
          <>
            <ChakraLink mr={4} onClick={onClickLogin}>
              ログイン
            </ChakraLink>
            <ChakraLink mr={4} onClick={onClickSignUp}>
              新規登録
            </ChakraLink>
          </>
        )}
      </Box>
    </Flex>
  );
});
