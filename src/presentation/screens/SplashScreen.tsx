import {Button} from '@pr/components/Button';
import {RootStackParamList, Screens} from '@pr/navigation/AppNavigator';
import {Colors} from '@pr/theme/Colors';
import {Images} from '@pr/theme/Images';
import {StackScreenProps} from '@react-navigation/stack';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';

export interface EventScreenProps
  extends StackScreenProps<RootStackParamList, Screens.Splash> {}

export const SplashScreen = ({navigation}: EventScreenProps) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View />
        <View>
          <Image source={Images.logo} style={styles.logoSplashScreen} />
        </View>
        <Button
          label="Comenzar"
          onPress={() => navigation.replace(Screens.List)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.backgroundDark,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoSplashScreen: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
