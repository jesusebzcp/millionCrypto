import {CryptoDetailScreen} from '@pr/screens/CryptoDetailScreen';
import {CryptoListScreen} from '@pr/screens/CryptoListScreen';
import {SplashScreen} from '@pr/screens/SplashScreen';
import {createStackNavigator} from '@react-navigation/stack';

export enum Screens {
  Splash = 'Splash',
  List = 'List',
  Detail = 'Detail',
}

export type RootStackParamList = {
  [Screens.Splash]: undefined;
  [Screens.List]: undefined;
  [Screens.Detail]: {id: string};
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={Screens.Splash}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.Splash} component={SplashScreen} />
      <Stack.Screen name={Screens.List} component={CryptoListScreen} />
      <Stack.Screen
        name={Screens.Detail}
        options={{
          presentation: 'modal',
        }}
        component={CryptoDetailScreen}
      />
    </Stack.Navigator>
  );
}
