import { ChangeEvent, FC, memo } from "react";
import { Input, InputProps } from "@chakra-ui/react";

type Argument = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const PrimaryInput: FC<{ argument: Argument } & InputProps> = memo(
  ({ argument, ...props }) => {
    const { onChange, value } = argument;
    return (
      <Input
        shadow="md"
        bg="#F3F3F3"
        border="none"
        {...props}
        onChange={onChange}
        value={value}
      />
    );
  }
);
