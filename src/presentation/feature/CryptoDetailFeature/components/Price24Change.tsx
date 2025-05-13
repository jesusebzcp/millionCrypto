import {Colors} from '@pr/theme/Colors';
import {Metrics} from '@pr/theme/Metrics';
import {StyleSheet, Text, View} from 'react-native';

type Price24ChangeProps = {
  price: string;
  changeColor: string;
  changeText: string;
};

export const Price24Change = ({
  price,
  changeColor,
  changeText,
}: Price24ChangeProps) => {
  return (
    <View style={styles.priceSection}>
      <View style={styles.contentPriceSymbol}>
        <Text style={styles.bigPrice}>{price}</Text>
        <Text style={styles.priceSymbol}>USD</Text>
      </View>
      <Text style={[styles.percentChange, {color: changeColor}]}>
        {changeText}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  priceSection: {
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.smallMargin,
  },
  contentPriceSymbol: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  bigPrice: {
    fontSize: 32,
    color: Colors.backgroundLight,
    fontWeight: 'bold',
    marginRight: Metrics.smallMargin,
  },
  priceSymbol: {
    color: Colors.backgroundLight,
    fontSize: 16,
    marginBottom: 4,
  },
  percentChange: {
    fontSize: 14,
    marginTop: Metrics.smallMargin / 2,
  },
});
