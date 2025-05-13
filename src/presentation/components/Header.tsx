import {Colors} from '@pr/theme/Colors';
import {Images} from '@pr/theme/Images';
import {Metrics} from '@pr/theme/Metrics';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {formatDate} from '@app/lib/formatDate';

const SIZE_LOGO = Metrics.width * 0.15;

type HeaderProps = {
  lastUpdate: Date;
};

export const Header = ({lastUpdate}: HeaderProps) => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.header,
        {
          marginTop: top,
        },
      ]}>
      <View style={styles.contentLogo}>
        <Image source={Images.logo} style={styles.logo} />
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subTitle}>{'Last update'}</Text>
        <Text style={styles.subTitle}>{formatDate(lastUpdate)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
  },
  logo: {
    width: SIZE_LOGO,
    height: SIZE_LOGO,
  },
  contentLogo: {
    alignSelf: 'center',
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  subTitle: {
    color: Colors.textSecondary,
  },
});
