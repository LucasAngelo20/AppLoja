import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

const ImageW = width * 0.07;
const ImageH = ImageW * 1;

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/3844438-hamburger-menu-more-navigation_110319.png')}
      />
      <Image
        style={styles.logo}
        source={require('../../assets/Logo.png')}
      />
      <Image
        style={styles.image}
        source={require('../../assets/heart_icon-icons.com_50374.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
  },
  image: {
    height: ImageH,
    width: ImageW, tintColor: '#aaa'
  },
  logo:{
    height: 30,
    width: 75
  }
});
