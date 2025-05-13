import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from '@pr/navigation/AppNavigator';
import {ProviderTanStack} from '@app/providers/wrappers/ProviderTanStack';

function App(): React.JSX.Element {
  return (
    <ProviderTanStack>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ProviderTanStack>
  );
}

export default App;
