import {useFetchTickerDetail} from '@infra/queries/useFetchTickerDetail';
import {Colors} from '@pr/theme/Colors';
import {useCallback, useMemo} from 'react';

type useCryptoDetailDataProps = {
  id: string;
};

export const useCryptoDetailData = ({id}: useCryptoDetailDataProps) => {
  const {data, error, isLoading, refetch} = useFetchTickerDetail(id);
  const coin = useMemo(() => data?.[0] ?? null, [data]);

  const {values, labels} = useMemo(() => {
    if (!coin) {
      return {values: [] as number[], labels: [] as string[]};
    }
    const now = Date.now();
    const base = parseFloat(coin.price_usd);
    const vals: number[] = [];
    const labs: string[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now - i * 24 * 3600 * 1000);
      labs.push(`${d.getMonth() + 1}/${d.getDate()}`);
      vals.push(base + (Math.random() - 0.5) * base * 0.05);
    }
    return {values: vals, labels: labs};
  }, [coin]);

  const onShare = useCallback(() => {}, []);

  const price = coin ? parseFloat(coin.price_usd).toFixed(2) : '--';
  const change24 = coin ? parseFloat(coin.percent_change_24h) : 0;
  const changeColor = change24 >= 0 ? Colors.success : Colors.error;
  const changeText = `${change24.toFixed(2)}% today`;

  return {
    price,
    changeColor,
    changeText,
    values,
    labels,
    coin,
    error,
    isLoading,
    refetch,
    onShare,
  };
};
