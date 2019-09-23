import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Dimensions } from 'react-native';
import T1 from './components/T1'
import T2 from './components/T2'

export default function App() {
  const [tf, setTf] = useState(true)
  const handlePress = () => {
    setTf(!tf)
  }
  return (
    <View style={styles.container}>
      {tf ? <T1 /> : <T2 />}
      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text style={styles.txt}>{tf ? 'Go to t2' : 'Go to t1'}</Text>
      </TouchableOpacity>
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
  btn: {
    width: Dimensions.get('window').width / 3,
    height: 100,
    backgroundColor: '#f56',
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    color: '#fff',
    fontSize: Dimensions.get('window').width / 20
  }
});
