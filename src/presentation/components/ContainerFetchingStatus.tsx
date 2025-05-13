import {Colors} from '@pr/theme/Colors';
import {PropsWithChildren} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {MessagesSquareIcon} from 'lucide-react-native';
import {Button} from './Button';
import {Metrics} from '@pr/theme/Metrics';

type ContainerFetchingStatusProps = PropsWithChildren & {
  loading: boolean;
  error: boolean;
  onRetry(): void;
};
export const ContainerFetchingStatus = ({
  error,
  loading,
  children,
  onRetry,
}: ContainerFetchingStatusProps) => {
  return (
    <>
      {loading && (
        <View style={styles.container}>
          <ActivityIndicator size={'small'} color={Colors.primaryAccent} />
          <Text style={styles.loadingText}>{'Loading...'}</Text>
        </View>
      )}
      {error && (
        <View style={styles.container}>
          <MessagesSquareIcon size={30} color={Colors.error} />
          <Text style={styles.loadingText}>{'Oops...'}</Text>
          <Text style={styles.loadingText}>
            {'an error occurred while querying the data'}
          </Text>
          <Button style={styles.retryButton} label="Retry" onPress={onRetry} />
        </View>
      )}

      {children}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.backgroundDark,
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: Colors.textLight,
    marginTop: Metrics.smallMargin,
  },
  retryButton: {
    marginTop: Metrics.baseMargin,
  },
});
