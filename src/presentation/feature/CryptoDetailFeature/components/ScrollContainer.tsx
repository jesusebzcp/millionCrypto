import {PropsWithChildren} from 'react';
import {ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type ScrollContainerProps = PropsWithChildren & {};
export const ScrollContainer = ({children}: ScrollContainerProps) => {
  const {bottom} = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: bottom + 20,
      }}>
      {children}
    </ScrollView>
  );
};
