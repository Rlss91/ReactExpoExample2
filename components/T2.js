import React, { useState } from 'react';
import { StyleSheet, Text, Switch, View, TextInput, KeyboardAvoidingView, TouchableHighlight } from 'react-native';

export default function T2() {
    const [tf, setTF] = useState(true)
    const styles = StyleSheet.create({
        css5: {
            flex: 1,
            backgroundColor: tf ? '#0ff' : '#000'
        },
        inp: {
            marginTop: 350,
            height: 40,
            width: 120,
            borderColor: 'gray',
            borderWidth: 1
        }
    })
    return (
        <KeyboardAvoidingView style={styles.css5} behavior="padding" keyboardVerticalOffset={50} enabled="false" >
            <View>
                <Text>T2</Text>
                <TextInput style={styles.inp} onBlur={() => console.log('here')} />
                <Switch
                    trackColor={{ true: '#000' }}//color of the track
                    thumbColor={'#f00'}//color of the circle
                    value={tf}//value that we must use with state
                    onValueChange={(val) => { //the function
                        console.log(val)
                        setTF(!tf)
                    }
                    }
                />
            </View>
        </KeyboardAvoidingView>
    );
}


