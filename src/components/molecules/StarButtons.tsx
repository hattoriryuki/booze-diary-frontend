import { FC, memo } from "react";
import { Button, ButtonProps } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export const StarButtons: FC = memo(() => {
  const StarButton = ({ ...props }: ButtonProps) => {
    return (
      <Button
        bg="none"
        px={0}
        minW="none"
        fontSize="x-large"
        _hover={{ border: "1px", borderColor: "white" }}
        {...props}
      >
        <FontAwesomeIcon icon={faStar} />
      </Button>
    );
  };
  return (
    <Flex>
      <StarButton />
      <StarButton />
      <StarButton />
      <StarButton />
      <StarButton />
    </Flex>
  );
});
