import { FC, memo } from "react";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@chakra-ui/layout";

export const ImageBox: FC = memo(() => {
  return (
    <Box
      fontSize="6xl"
      mt={8}
      border="1px"
      h="150px"
      w="200px"
      py={6}
      px={8}
      textAlign="center"
    >
      <FontAwesomeIcon icon={faImage} />
    </Box>
  );
});
