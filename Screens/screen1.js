import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, ImageBackground,Image, View, Text } from 'react-native';
import award_bg from '../Images/award_bg.png';
import castingLogo from '../Images/castingLogo.png'
import girlClap from '../Images/girlClap.png'
import awardPlatform from '../Images/awardPlatform.png'
import {useNavigation} from '@react-navigation/native'

const Screen1 = () => {

  const navigation = useNavigation()

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Screen2');
    }, 3000);
    return () => clearTimeout(timeout)
  }, [navigation]);


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={award_bg} style={styles.imageBackground}>
        <Image source={castingLogo} style={styles.logo} resizeMode='contain'/>
        <Text style={styles.text}>The Results R In!</Text>
        <Image source={awardPlatform} style={styles.stage} resizeMode='contain' />
        <Image source={girlClap} style={styles.girl} resizeMode='contain' />
      </ImageBackground>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  logo: {
    position: 'absolute',
    top: 100,  
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
  },
  text: {
    fontSize: 25,
    fontWeight: '400',
    marginTop: 500, // Adjust as needed
    color: 'yellow',
  },
  girl: {
    width: 300,
    height: 300,
    top: -299,
  },
  stage:{
    width: 400,
    height: 400,
    top: 220,
  }
});

export default Screen1;