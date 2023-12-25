import { FC, memo, useCallback, useState } from "react";
import { Button } from "@chakra-ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSub } from "@fortawesome/free-solid-svg-icons";

export const StarButtons: FC = memo(() => {
  const [ratings, setRatings] = useState([false, false, false, false, false]);

  const onClickSubmit = useCallback((index: number) => {
    const submitted = [...ratings];
    submitted[index] = !ratings[index];
    setRatings(submitted);
  }, [ratings]);

  return (
    <>
      {ratings.map((val, index) => {
        return (
          <Button
            key={index}
            bg="none"
            px={0}
            minW="none"
            fontSize="x-large"
            _hover={{ cursor: "pointer" }}
            _active={{ bg: "none" }}
            onClick={() => onClickSubmit(index)}
          >
            {val ? (
              <FontAwesomeIcon icon={faStarSub} />
            ) : (
              <FontAwesomeIcon icon={faStar} />
            )}
          </Button>
        );
      })}
    </>
  );
});
