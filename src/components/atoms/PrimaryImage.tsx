import { FC, memo } from "react";
import { Image, ImageProps } from "@chakra-ui/react";

type Argument = {
  image: string | undefined;
  alt: string;
};

export const PrimaryImage: FC<{ argument: Argument } & ImageProps> = memo(
  ({ argument, ...props }) => {
    const { image, alt } = argument;
    return (
      <Image
        src={image}
        alt="Drink image"
        w="300px"
        h="200px"
        borderRadius="10px"
        aspectRatio="16 / 9"
        objectFit="cover"
        {...props}
      />
    );
  }
);
