import {Colors} from '@pr/theme/Colors';
import {Metrics} from '@pr/theme/Metrics';
import {ShareIcon} from 'lucide-react-native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type HeaderProps = {
  symbol: string;
  name: string;
  onShare(): void;
};

export const Header = ({symbol, name, onShare}: HeaderProps) => {
  return (
    <>
      <View style={styles.adornment} />
      <View style={styles.header}>
        <View style={styles.contentAvatar}>
          <View style={styles.symbol}>
            <Text style={styles.symbolAvatar}>{symbol}</Text>
          </View>
          <View>
            <Text style={styles.title}>
              {' '}
              {name} – {symbol}
            </Text>
            <Text style={styles.nameSymbol}>Detail</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onShare}>
          <ShareIcon color={Colors.primaryAccent} size={20} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  adornment: {
    height: 8,
    width: 30,
    backgroundColor: Colors.neutralGray,
    alignSelf: 'center',
    marginVertical: Metrics.smallMargin,
    borderRadius: 20,
  },

  header: {
    borderBottomColor: Colors.neutralGray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.smallMargin,
  },
  contentAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  symbol: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primaryAccent,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Metrics.smallMargin,
  },
  symbolAvatar: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.textLight,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textLight,
  },
  nameSymbol: {
    color: Colors.neutralGray,
    fontSize: 14,
  },
});
