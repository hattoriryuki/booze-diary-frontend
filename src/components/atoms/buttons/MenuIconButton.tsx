import { FC, memo } from "react";
import { IconButton } from "@chakra-ui/react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  onClick: () => void;
  icon: IconDefinition;
  color: string;
};

export const MenuIconButton: FC<Props> = memo((props) => {
  const { onClick, icon, color } = props;

  return (
    <IconButton
      aria-label="Action button"
      background="none"
      height="2rem"
      color={color}
      icon={<FontAwesomeIcon icon={icon} />}
      onClick={onClick}
    />
  );
});
