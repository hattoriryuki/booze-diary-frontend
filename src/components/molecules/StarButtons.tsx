import {
  Dispatch,
  FC,
  SetStateAction,
  memo,
  useCallback,
  useState,
} from "react";
import { Button } from "@chakra-ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSub } from "@fortawesome/free-solid-svg-icons";

type Props = {
  setRecommend: Dispatch<SetStateAction<number>>;
};

export const StarButtons: FC<Props> = memo((props) => {
  const { setRecommend } = props;
  const [ratings, setRatings] = useState([false, false, false, false, false]);

  const onClickSubmit = useCallback(
    (index: number) => {
      const submitted = [...ratings];
      submitted[index] = !ratings[index];
      setRatings(submitted);

      const filtered = submitted.filter((val) => val === true);
      setRecommend(filtered.length);
    },
    [ratings]
  );

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
