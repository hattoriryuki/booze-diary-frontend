import { FC, memo } from "react";
import { Box, Image } from "@chakra-ui/react";

import topImage from "../../assets/images/top.jpg";

export const Top: FC = memo(() => {
  return (
    <Box w="100vw">
      <Image src={topImage} alt="Top image" w="100%" />
    </Box>
  );
});
