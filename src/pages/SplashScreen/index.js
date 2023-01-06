import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: 'yellow',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <View style={{height: 28}} />
      <Text
        style={{fontSize: 18, color: 'black', fontFamily: 'Poppins-Medium'}}>
        Ramsfood
      </Text>
    </View>
  );
};

export default SplashScreen;
