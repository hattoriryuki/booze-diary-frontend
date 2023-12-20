import { ChangeEvent, FC, memo } from "react";
import { Box, BoxProps, Text } from "@chakra-ui/layout";

import { PrimaryInput } from "../atoms/PrimaryInput";

type Params = {
  title: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const PrimaryInputArea: FC<{ params: Params } & BoxProps> = memo(
  ({ params, ...props }) => {
    const { title, type, onChange, value } = params;

    return (
      <Box w={{ base: "90%", md: "50%" }} {...props}>
        <Text color="#0A2463">{title}</Text>
        <PrimaryInput type={type} onChange={onChange} value={value} />
      </Box>
    );
  }
);
