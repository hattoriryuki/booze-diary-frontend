import { FC, memo, useCallback, useState } from "react";
import {
  Box,
  BoxProps,
  Button,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { PrimaryInput } from "../atoms/PrimaryInput";

export const PasswordInput: FC<BoxProps> = memo(({ ...props }) => {
  const [show, setShow] = useState(false);

  const onClickShowPassword = useCallback(() => setShow(!show), [show]);

  return (
    <Box w={{ base: "90%", md: "50%" }} {...props}>
      <Text>パスワード</Text>
      <InputGroup>
        <PrimaryInput type={show ? "text" : "password"} />
        <InputRightElement w="3.5rem">
          <Button
            size="sm"
            h="1.75rem"
            bg={show ? "#e1e5e8" : "#F3F3F3"}
            color="gray.600"
            _hover={{ color: "gray.500" }}
            onClick={onClickShowPassword}
          >
            表示
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
});
