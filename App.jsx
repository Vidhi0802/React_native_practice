import React from 'react';
import { StyleSheet, View } from 'react-native';
import Screen1 from './Screens/screen1';

const App = () => {
  return (
    <View style={styles.container}>
      <Screen1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;