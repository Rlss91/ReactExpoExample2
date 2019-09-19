import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [txt, setTxt] = useState('')
  const handleTextChange = (txti) => {
    setTxt(txti)
  }
  const handlePress = (ev) => {
    console.log('here')
  }
  return (
    <View style={styles.container}>
      <Text>Hell World</Text>
      <TextInput
        value={txt}
        onChangeText={handleTextChange}
        style={{
          backgroundColor: '#479',
          padding: 30
        }}
        placeholder='Here'
        placeholderTextColor={'#0f0'}
        onBlur={() => { console.log('ok') }}
        onFocus={() => { console.log('ok') }}
      />
      <TextInput
        value={txt}
        onChangeText={handleTextChange}
        style={{ backgroundColor: '#fa0', margin: 50, padding: 30 }}
        placeholder='Here'
      />
      <TouchableOpacity
        onPress={handlePress}
        style={{ backgroundColor: '#f20' }}
        activeOpacity={1}
      >
        <Text>Click here</Text>
      </TouchableOpacity>
      {/* <Button
        onPress={handlePress}
        title="Red button!"
        color="red"
      /> */}
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
