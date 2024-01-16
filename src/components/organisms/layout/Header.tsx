import {
  FC,
  ReactNode,
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Box, Flex, Image, Text, Link as ChakraLink } from "@chakra-ui/react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import logoImage from "../../../assets/images/logo.png";
import { LoginUserContext } from "../../../providers/LoginUserProvider";
import { HamburgerMenu } from "../HamburgerMenu";

export const Header: FC = memo(() => {
  const [link, setLink] = useState<ReactNode>();
  const navigate = useNavigate();
  const { isSignedIn } = useContext(LoginUserContext);
  const location = useLocation();

  const selectLink = () => {
    if (location.pathname === "/posts") {
      setLink(<Link to="/">トップ</Link>);
    } else {
      setLink(<Link to="/posts">ギャラリー</Link>);
    }
  };

  const onClickLogin = useCallback(() => navigate("/login"), []);
  const onClickSignUp = useCallback(() => navigate("/signup"), []);
  const onClickTop = useCallback(() => navigate("/"), []);

  useEffect(() => {
    selectLink();
  }, [location]);

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
            <ChakraLink>{link}</ChakraLink>
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
