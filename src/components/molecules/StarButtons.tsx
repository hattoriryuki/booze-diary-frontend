import {
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Button } from "@chakra-ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSub } from "@fortawesome/free-solid-svg-icons";

type Props = {
  setRecommend: Dispatch<SetStateAction<number>>;
  starRef?: MutableRefObject<boolean[]>;
};

export const StarButtons: FC<Props> = memo((props) => {
  const { setRecommend, starRef } = props;
  const [ratings, setRatings] = useState([false, false, false, false, false]);

  useEffect(() => {
    if (!starRef) return;
    setRatings(starRef.current);
  }, [starRef]);

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
