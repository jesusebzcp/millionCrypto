import {Colors} from '@pr/theme/Colors';
import {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

export const Container = ({children}: PropsWithChildren) => {
  return <View style={styles.safeAreaView}>{children}</View>;
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.backgroundDark,
  },
});
