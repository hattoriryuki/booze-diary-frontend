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
import { HamburgerMenu } from "../../molecules/HamburgerMenu";
import { useSelectLink } from "../../../hooks/useSelectLink";

export const Header: FC = memo(() => {
  const [link, setLink] = useState<ReactNode>();
  const navigate = useNavigate();
  const { isSignedIn } = useContext(LoginUserContext);
  const { selectLink } = useSelectLink({ setLink });
  const location = useLocation();

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
          <Flex align="center">
            <Flex gap={7} display={{ base: "none", md: "flex" }}>
              <Box _hover={{ textDecoration: "underline" }}>{link}</Box>
              <Box mr={7} _hover={{ textDecoration: "underline" }}>
                <Link to="/posts/new">
                  <Flex align="center">
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <Text ml={1}>投稿する</Text>
                  </Flex>
                </Link>
              </Box>
            </Flex>
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
