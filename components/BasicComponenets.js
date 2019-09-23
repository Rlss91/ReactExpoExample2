import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';

export default function BasicComponenets() {
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
            <TouchableHighlight
                style={{ backgroundColor: '#dddddd' }}
                activeOpacity={0.1}
                underlayColor={'#d3d3d3'}
                onPress={handlePress}
            >
                <Text>Click here</Text>
            </TouchableHighlight>
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
