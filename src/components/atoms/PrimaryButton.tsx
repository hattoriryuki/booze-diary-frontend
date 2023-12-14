import { FC, ReactNode, memo } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children } = props;
  
  return (
    <Button
      bgColor="#4D4B4B"
      color="white"
      mt={{ base: "10", md: "20" }}
      _hover={{ opacity: 0.8 }}
    >
      {children}
    </Button>
  );
});
