import { useCallback, useState } from "react";
import { AxiosResponse } from "axios";

type Props = {
  request: (id: string | undefined) => Promise<AxiosResponse<any, any>>;
};

export const useGetDetail = (props: Props) => {
  const { request } = props;
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);

  const getDetail = useCallback(async (query: string | undefined) => {
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
  return { getDetail, loading, data };
};
