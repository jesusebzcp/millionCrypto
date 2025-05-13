import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Crypto} from '@infra/queries/useFetchTickers';
import {Colors} from '@pr/theme/Colors';

export interface CryptoCardProps extends Crypto {
  onSelectCard: (id: string) => void;
}

export const CryptoCard: React.FC<CryptoCardProps> = ({
  symbol,
  name,
  price_usd,
  percent_change_24h,
  onSelectCard,
  id,
}) => {
  const changeValue = parseFloat(percent_change_24h);
  const changeColor = changeValue >= 0 ? Colors.success : Colors.error;

  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelectCard(id)}>
      <View style={styles.header}>
        <Text style={styles.symbol}>{symbol}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.price}>${parseFloat(price_usd).toFixed(2)}</Text>
        <Text style={[styles.change, {color: changeColor}]}>
          {changeValue.toFixed(2)}%
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundLight,
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
    shadowColor: Colors.primaryDark,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  symbol: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primaryDark,
    marginRight: 8,
  },
  name: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primaryAccent,
  },
  change: {
    fontSize: 14,
    fontWeight: '600',
  },
});
