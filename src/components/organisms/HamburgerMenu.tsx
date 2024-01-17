import {
  FC,
  ReactNode,
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import {
  faAddressCard,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

import { LoginUserContext } from "../../providers/LoginUserProvider";
import { useSignOut } from "../../hooks/useSignOut";
import { useSelectLink } from "../../hooks/useSelectLink";

export const HamburgerMenu: FC = memo(() => {
  const [link, setLink] = useState<ReactNode>();
  const { currentUser } = useContext(LoginUserContext);
  const { signOut } = useSignOut();
  const { selectLink } = useSelectLink({ setLink });
  const navigate = useNavigate();

  const onClickSignOut = useCallback(() => signOut(), []);

  useEffect(() => {
    selectLink();
  }, []);

  return (
    <Menu autoSelect={false}>
      <MenuButton mr={{ base: 4, md: 8 }}>
        <Avatar src={currentUser?.image} />
      </MenuButton>
      <MenuList minW="12rem">
        <MenuGroup
          color="#0a2463"
          title={currentUser?.name}
          fontSize="xl"
          mt={1}
        >
          <MenuDivider />
          <MenuItem>
            <FontAwesomeIcon icon={faAddressCard} />
            <Text ml={2}>マイページ</Text>
          </MenuItem>
          <MenuItem color="red.500" onClick={onClickSignOut}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            <Text ml={2}>ログアウト</Text>
          </MenuItem>
        </MenuGroup>
        <Box display={{ base: "block", md: "none" }}>
          <MenuDivider />
          <MenuGroup color="#0a2463" title="Link">
            <MenuItem>{link}</MenuItem>
            <MenuItem onClick={() => navigate("/posts/new")}>
              <FontAwesomeIcon icon={faPenToSquare} />
              <Text ml={2}>投稿する</Text>
            </MenuItem>
          </MenuGroup>
        </Box>
      </MenuList>
    </Menu>
  );
});
