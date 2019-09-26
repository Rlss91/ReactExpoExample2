import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import T1 from './components/T1'
import T2 from './components/T2'
import Button from './components/utils/Button'

export default function App() {
  const [tf, setTf] = useState(true)
  const handlePress = () => {
    setTf(!tf)
  }
  return (
    <View style={styles.container}>
      {tf ? <T1 /> : <T2 />}
      <Button style={styles.btn} onPress={handlePress}>{tf ? 'Go to t2' : 'Go to t1'}</Button>
      {/* <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text style={styles.txt}>{tf ? 'Go to t2' : 'Go to t1'}</Text>
      </TouchableOpacity> */}
      {/* <Button title={tf ? 'Go to t2' : 'Go to t1'} onPress={handlePress} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  pbtn: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: Dimensions.get('window').width / 3,
    height: 100,
    backgroundColor: '#f56',
    color: '#fff',
    fontSize: Dimensions.get('window').width / 20
  },
  btntxt: {
    backgroundColor: '#467854',
    color: '#1d3d5d',
    fontSize: 100
  }
});
