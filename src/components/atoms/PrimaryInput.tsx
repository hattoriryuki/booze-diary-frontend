import { FC, memo } from "react";
import { Input, InputProps } from "@chakra-ui/react";

export const PrimaryInput: FC<InputProps> = memo(({ ...props }) => {
  return <Input shadow="md" bg="#F3F3F3" border="none" {...props} />;
});
