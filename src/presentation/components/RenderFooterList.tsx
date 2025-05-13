import {Colors} from '@pr/theme/Colors';
import {Metrics} from '@pr/theme/Metrics';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

type RenderFooterListProps = {
  isFetchingNextPage: boolean;
};
export const RenderFooterList = ({
  isFetchingNextPage,
}: RenderFooterListProps) => {
  if (!isFetchingNextPage) {
    return null;
  }
  return (
    <View style={styles.footer}>
      <ActivityIndicator size="small" color={Colors.primaryAccent} />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingVertical: Metrics.baseMargin,
  },
});
