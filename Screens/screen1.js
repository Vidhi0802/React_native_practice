import { SafeAreaView, StyleSheet, Text, View, ImageBackground,Image } from 'react-native'
import React from 'react'

const Screen1 = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.ImgBack}
         source={require('../Images/award_bg.png')}>

        </ImageBackground>
    </SafeAreaView>
  )
}

export default Screen1

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10
    },
    ImgBack:{
        flex: 1,
        // width: '100%',
        // height: '100%',
    }
})