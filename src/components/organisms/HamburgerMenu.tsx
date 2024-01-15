import { FC, memo } from "react";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HamburgerMenu: FC = memo(() => {
  return (
    <Menu autoSelect={false}>
      <MenuButton>
        <FontAwesomeIcon icon={faBars} />
      </MenuButton>
      <MenuList>
        <MenuGroup color="#0a2463" title="Action">
          <MenuItem>投稿する</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup color="#0a2463" title="Link">
          <MenuItem>マイページ</MenuItem>
          <MenuItem>トップ</MenuItem>
          <MenuItem>ログアウト</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup color="#0a2463" title="Creator">
          <MenuItem>X</MenuItem>
          <MenuItem>GitHub</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup color="#0a2463" title="Help">
          <MenuItem>お問い合わせ</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
});
