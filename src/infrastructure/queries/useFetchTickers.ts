import {apiClient} from '@infra/config/axiosClient';
import {useInfiniteQuery} from '@tanstack/react-query';

export type Crypto = {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
  csupply: string;
  tsupply: string;
  msupply: string;
};

type Response = {
  data: Crypto[];
  info: {
    coins_num: number;
    time: number;
  };
};

type QueryParams = {
  limit?: number;
  setLastUpdate?: React.Dispatch<React.SetStateAction<Date>>;
};

const fetchPage = ({
  start = 0,
  limit = 10,
  setLastUpdate,
}: {
  start?: number;
  limit?: number;
  setLastUpdate?: React.Dispatch<React.SetStateAction<Date>>;
}) => {
  if (typeof setLastUpdate === 'function') {
    setLastUpdate(new Date());
  }
  return apiClient.get<Response>(`/tickers/?start=${start}&limit=${limit}`);
};

export const useFetchTickers = ({
  limit = 10,
  setLastUpdate,
}: QueryParams = {}) =>
  useInfiniteQuery({
    queryKey: ['tickers', limit],
    queryFn: ({pageParam = 0}) =>
      fetchPage({start: pageParam, limit, setLastUpdate}),
    getNextPageParam: (lastPage, allPages) => {
      const loaded = allPages.length * limit;

      return loaded < lastPage.info.coins_num ? loaded : undefined;
    },
    initialPageParam: 0,
  });
