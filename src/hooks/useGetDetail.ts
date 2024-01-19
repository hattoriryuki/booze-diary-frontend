import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { AxiosResponse } from "axios";

interface Props<T, P> {
  request: (id: T | undefined) => Promise<AxiosResponse<any, any>>;
  setData: Dispatch<SetStateAction<P>>;
}

export const useGetDetail = <T, P>(props: Props<T, P>) => {
  const { request, setData } = props;
  const [loading, setLoading] = useState(false);

  const getDetail = useCallback(async (query: T | undefined) => {
    setLoading(true);
    try {
      const res = await request(query);
      setData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);
  return { getDetail, loading };
};
