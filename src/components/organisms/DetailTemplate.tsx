import { FC, ReactNode, memo } from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { StandOutBox } from "../atoms/StandOutBox";
import { PrimaryImage } from "../atoms/PrimaryImage";
import { PostParams } from "../../types/api/post";

type Props = {
  title: string;
  children: ReactNode;
  listItem: PostParams[] | undefined;
  loading: boolean;
};

export const DetailTemplate: FC<Props> = memo((props) => {
  const { title, children, listItem, loading } = props;

  return (
    <Box mt={16}>
      <Flex
        direction="column"
        mt={16}
        h="100vh"
        align="center"
        overflowY="scroll"
      >
        <Heading fontSize="3xl" color="#0A2463" mt={6}>
          {title}
        </Heading>
        {children}
        <Heading mt={8} mb={2} fontSize={{ base: "sm", md: "xl" }}>
          過去の投稿
        </Heading>
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
    </Box>
  );
});
