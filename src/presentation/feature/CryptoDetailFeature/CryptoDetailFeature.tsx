import {Container} from './components/Container';
import {useCryptoDetailData} from './hooks/useCryptoDetailData';
import {ScrollContainer} from './components/ScrollContainer';
import {Price24Change} from './components/Price24Change';
import {CryptoHistoryChart} from './components/CryptoHistoryEChart';
import {CoinDetail} from './components/CoinDetail';
import {Header} from './components/Header';
import {ContainerFetchingStatus} from '@pr/components/ContainerFetchingStatus';

type CryptoDetailFeatureProps = {
  id: string;
};

export const CryptoDetailFeature = ({id}: CryptoDetailFeatureProps) => {
  const {
    changeColor,
    changeText,
    labels,
    price,
    values,
    coin,
    error,
    isLoading,
    refetch,
    onShare,
  } = useCryptoDetailData({
    id,
  });

  return (
    <ContainerFetchingStatus
      onRetry={refetch}
      error={!!error}
      loading={isLoading}>
      <Container>
        <Header
          symbol={coin?.symbol ?? ''}
          name={coin?.name ?? ''}
          onShare={onShare}
        />
        <ScrollContainer>
          <Price24Change
            price={price}
            changeColor={changeColor}
            changeText={changeText}
          />
          <CryptoHistoryChart data={values} labels={labels} />
          {coin && <CoinDetail {...coin} />}
        </ScrollContainer>
      </Container>
    </ContainerFetchingStatus>
  );
};
