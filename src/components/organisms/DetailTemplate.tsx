import { FC, ReactNode, memo } from "react";
import {
  Box,
  Center,
  Flex,
  FlexProps,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

import { StandOutBox } from "../atoms/StandOutBox";
import { PrimaryImage } from "../atoms/PrimaryImage";
import { PostParams } from "../../types/api/post";
import { ArrowBackButton } from "../atoms/buttons/ArrowBackButton";

type Props = {
  title: string;
  children: ReactNode;
  listItem: PostParams[] | undefined;
  loading: boolean;
  style?: FlexProps;
};

export const DetailTemplate: FC<Props> = memo((props) => {
  const { title, children, listItem, loading, style } = props;
  const navigate = useNavigate();

  return (
    <Flex direction="column" mt={16} align="center" {...style}>
      <Heading fontSize="3xl" color="#0A2463" mt={6}>
        {title}
      </Heading>
      {children}
      <Box w="100%" position="relative">
        <Heading
          textAlign="center"
          mt={8}
          mb={2}
          fontSize={{ base: "sm", md: "xl" }}
        >
          過去の投稿
        </Heading>
        <ArrowBackButton
          position="absolute"
          top={0}
          left="10%"
          func={() => navigate(-1)}
        />
      </Box>
      {loading ? (
        <Center h="100%">
          <Spinner />
        </Center>
      ) : (
        <SimpleGrid mt={2} columns={{ base: 1, md: 4 }} gap={4}>
          {listItem?.map((data) => (
            <Link to={`/posts/${data.id}`} key={data.id}>
              <StandOutBox>
                <PrimaryImage
                  argument={{ image: data.image, alt: "Drink image" }}
                />
                <Text align="center">{data.name}</Text>
              </StandOutBox>
            </Link>
          ))}
        </SimpleGrid>
      )}
    </Flex>
  );
});
