import { SafeAreaView, StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'
import Screen1 from './Screens/screen1'
import Screen2 from './Screens/screen2'
import Screen3 from './Screens/screen3'

const App = () => {
  return (
    <View>
      <Screen1/>
      {/* <Screen2/>
      <Screen3/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})