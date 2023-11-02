import {View, Text, Image} from 'react-native';
import React from 'react';
import SplashImageIcon from '../../assets/Images/splash-removebg-preview.png';
import {appColor} from '../../utils/utils';

export default function Splash() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.TextColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={SplashImageIcon} style={{width: 200, height: 150}} />
    </View>
  );
}
