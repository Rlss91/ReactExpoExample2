import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
//import  Scrollviewexample  from './components/scrollviewexample'
import FlatListExample from './components/FlatListExample'

export default function App() {

  return (
    <View style={styles.container}>
      <FlatListExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
