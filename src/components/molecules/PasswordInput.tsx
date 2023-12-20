import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import {
  Box,
  Button,
  ButtonProps,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

import { PrimaryInput } from "../atoms/PrimaryInput";

type Argument = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  title: string;
};

export const PasswordInput: FC<{ argument: Argument } & ButtonProps> = memo(
  ({ argument, ...props }) => {
    const { onChange, value, title } = argument;
    const [show, setShow] = useState(false);

    const onClickShowPassword = useCallback(() => setShow(!show), [show]);

    return (
      <Box w={{ base: "90%", md: "50%" }} {...props}>
        <Text color="#0A2463">{title}</Text>
        <InputGroup>
          <PrimaryInput
            type={show ? "text" : "password"}
            onChange={onChange}
            value={value}
          />
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
  }
);
