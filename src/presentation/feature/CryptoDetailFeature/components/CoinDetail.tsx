import {Crypto} from '@infra/queries/useFetchTickers';
import {Colors} from '@pr/theme/Colors';
import {Metrics} from '@pr/theme/Metrics';
import {StyleSheet, Text, View} from 'react-native';

type CoinDetailProps = Crypto & {};

export const CoinDetail = ({
  rank,
  price_btc,
  market_cap_usd,
  volume24,
  volume24a,
  csupply,
  tsupply,
  msupply,
}: CoinDetailProps) => {
  return (
    <>
      <View style={styles.statsGrid}>
        {[
          ['Rank', rank],
          ['Precio BTC', price_btc],
          ['Cap. Mercado', `$${(+market_cap_usd).toLocaleString()}`],
          ['Vol. 24 h', `$${volume24.toLocaleString()}`],
          ['Vol. Prev. 24 h', `$${volume24a.toLocaleString()}`],
          ['Circulante', csupply],
          ['Total', tsupply],
          ['Máximo', msupply || '–'],
        ].map(([label, val]) => (
          <View key={label as string} style={styles.statBlock}>
            <Text style={styles.statLabel}>{label}</Text>
            <Text style={styles.statValue}>{val}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: Metrics.baseMargin,
    paddingHorizontal: Metrics.baseMargin,
  },
  statBlock: {
    width: '50%',
    padding: Metrics.smallMargin,
  },
  statLabel: {
    color: Colors.textSecondary,
    fontSize: 12,
    marginBottom: Metrics.smallMargin / 2,
  },
  statValue: {
    color: Colors.backgroundLight,
    fontSize: 14,
    fontWeight: '600',
  },
});
