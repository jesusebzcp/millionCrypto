import {apiClient} from '@infra/config/axiosClient';
import {useQuery} from '@tanstack/react-query';
import {Crypto} from './useFetchTickers';

export type DetailResponse = Crypto[];

const fetchTickerDetail = (id: string) =>
  apiClient.get<DetailResponse>(`/ticker/?id=${id}`);

export const useFetchTickerDetail = (id: string) =>
  useQuery({
    queryFn: () => fetchTickerDetail(id),
    queryKey: ['tickerDetail', id],
    refetchInterval: 60000,
    refetchIntervalInBackground: true,
    staleTime: 30000,
  });
