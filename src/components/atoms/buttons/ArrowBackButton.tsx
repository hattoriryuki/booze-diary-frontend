import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

type Props = {
  func: () => void;
};

export const ArrowBackButton = (props: Props) => {
  const { func } = props;
  
  return (
    <IconButton
      aria-label="Page back button"
      icon={<ArrowBackIcon />}
      bg="none"
      border="1px"
      borderColor="gray.300"
      _hover={{ bg: "blackAlpha.100" }}
      onClick={func}
    />
  );
};
