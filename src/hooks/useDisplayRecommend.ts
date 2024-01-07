import { MutableRefObject, useCallback } from "react";

import { PostParams } from "../types/api/post";

type Props = {
  data: PostParams | undefined;
  recommend: MutableRefObject<string>;
};

export const useDisplayRecommend = () => {
  const displayRecommend = useCallback((props: Props) => {
    const { data, recommend } = props;

    if (!data) return;
    for (let i = 0; i < data.recommend; i++) {
      recommend.current += "★";
    }
    if (data.recommend < 5) {
      for (let i = 0; i < 5 - data.recommend; i++) {
        recommend.current += "☆";
      }
    }
  }, []);
  return { displayRecommend };
};
