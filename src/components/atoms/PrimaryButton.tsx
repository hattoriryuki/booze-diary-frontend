import { FC, memo } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

export const PrimaryButton: FC<ButtonProps> = memo((props) => {
  return (
    <Button
      bgColor="#4D4B4B"
      color="white"
      _hover={{ opacity: 0.8 }}
      {...props}
    />
  );
});
