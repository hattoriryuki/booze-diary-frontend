import { FC, memo } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { ButtonProps, IconButton } from "@chakra-ui/react";

export const ArrowBackButton: FC<{ func: () => void } & ButtonProps> = memo(
  ({ func, ...props }) => {
    return (
      <IconButton
        {...props}
        aria-label="Page back button"
        icon={<ArrowBackIcon />}
        bg="none"
        border="1px"
        borderColor="gray.300"
        _hover={{ bg: "blackAlpha.100" }}
        onClick={func}
      />
    );
  }
);
