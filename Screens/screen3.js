import { SafeAreaView, StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'

const Screen3 = () => {
  return (
      <SafeAreaView style={styles.container}>
          <ImageBackground style={styles.ImgBack}
              source={require('../Images/award_bg.png')}>

          </ImageBackground>
      </SafeAreaView>
  )
}

export default Screen3

const styles = StyleSheet.create({})