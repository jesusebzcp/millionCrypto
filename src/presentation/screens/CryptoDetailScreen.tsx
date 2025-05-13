import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList, Screens} from '@pr/navigation/AppNavigator';
import {CryptoDetailFeature} from '@pr/feature/CryptoDetailFeature/CryptoDetailFeature';

interface CryptoDetailScreenProps
  extends StackScreenProps<RootStackParamList, Screens.Detail> {}

export const CryptoDetailScreen = ({
  route: {
    params: {id},
  },
}: CryptoDetailScreenProps) => {
  return <CryptoDetailFeature id={id} />;
};
