import { FC, ReactNode, memo } from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

export const StandOutBox: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <Box
      position="relative"
      borderRadius="10px"
      cursor="pointer"
      transition="all .3s"
      _hover={{
        position: "relative",
        top: "-3px",
        boxShadow: "0 2px 3px rgba(0, 0, 0, 0.3)",
      }}
    >
      {children}
    </Box>
  );
});
