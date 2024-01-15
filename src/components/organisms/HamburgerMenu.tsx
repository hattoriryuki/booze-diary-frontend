import { FC, memo, useCallback, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import {
  Avatar,
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

export const HamburgerMenu: FC = memo(() => {
  const { currentUser } = useContext(LoginUserContext);
  const { signOut } = useSignOut();

  const onClickSignOut = useCallback(() => signOut(), []);

  return (
    <Menu autoSelect={false}>
      <MenuButton mr={8}>
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
      </MenuList>
    </Menu>
  );
});
