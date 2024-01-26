import { FC, memo } from "react";
import { Center, Spinner } from "@chakra-ui/react";

export const CenterSpinner: FC = memo(() => {
  return (
    <Center h="100%">
      <Spinner />
    </Center>
  );
});
