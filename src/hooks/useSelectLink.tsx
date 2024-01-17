import { Dispatch, ReactNode, SetStateAction, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";
import { faImages } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  setLink: Dispatch<SetStateAction<ReactNode>>;
};

export const useSelectLink = (props: Props) => {
  const { setLink } = props;
  const location = useLocation();
  const top = (
    <Link to="/">
      <Flex gap={1} align="center">
        <FontAwesomeIcon icon={faHouse} />
        <Text>トップ</Text>
      </Flex>
    </Link>
  );

  const gallery = (
    <Link to="/posts">
      <Flex gap={1} align="center">
        <FontAwesomeIcon icon={faImages} />
        <Text>ギャラリー</Text>
      </Flex>
    </Link>
  );

  const selectLink = useCallback(() => {
    if (location.pathname === "/posts") {
      setLink(top);
    } else {
      setLink(gallery);
    }
  }, []);
  return { selectLink };
};
