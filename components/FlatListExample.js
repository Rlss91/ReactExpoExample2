import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import Scrollviewexample from './components/scrollviewexample'

export default function FlatListExample() {
    return (
        <View style={styles.container}>
            <Scrollviewexample />
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
