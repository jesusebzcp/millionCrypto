import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';

import {Crypto, useFetchTickers} from '@infra/queries/useFetchTickers';
import {CryptoCard} from '@pr/components/CryptoCard';
import {Header} from '@pr/components/Header';
import {Colors} from '@pr/theme/Colors';
import {Metrics} from '@pr/theme/Metrics';
import {RootStackParamList, Screens} from '@pr/navigation/AppNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {ContainerFetchingStatus} from '@pr/components/ContainerFetchingStatus';
import {RenderFooterList} from '@pr/components/RenderFooterList';

interface CryptoListScreenProps
  extends StackScreenProps<RootStackParamList, Screens.List> {}

export const CryptoListScreen = ({navigation}: CryptoListScreenProps) => {
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
    status,
    refetch,
  } = useFetchTickers({limit: 20, setLastUpdate});

  const items = useMemo(
    () => data?.pages.flatMap(page => page.data) ?? [data],
    [data],
  );

  const loadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const onRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <ContainerFetchingStatus
      onRetry={onRefresh}
      error={!!error}
      loading={isLoading}>
      <View style={styles.container}>
        <Header lastUpdate={lastUpdate} />
        {items && items.length > 0 && (
          <FlashList
            data={items as Crypto[]}
            renderItem={({item}) => (
              <CryptoCard
                {...(item as Crypto)}
                onSelectCard={id =>
                  navigation.navigate(Screens.Detail, {
                    id,
                  })
                }
              />
            )}
            keyExtractor={item => item?.id}
            contentContainerStyle={styles.list}
            estimatedItemSize={100}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={RenderFooterList}
            onRefresh={onRefresh}
            refreshing={status === 'pending'}
          />
        )}
      </View>
    </ContainerFetchingStatus>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundDark,
  },
  list: {
    paddingHorizontal: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin,
  },

  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
