import React from 'react';
import { StyleSheet, View } from 'react-native';
import Screen1 from './Screens/screen1';
import Screen2 from './Screens/screen2';
import Screen3 from './Screens/screen3';



const App = () => {
  return (
    <View style={styles.container}>
      <Screen3 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;