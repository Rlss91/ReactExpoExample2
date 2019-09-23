import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';

export default function FlatListItemExample(props) {
    //console.log(props)
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>username:{props.username}</Text>
            <Text>name:{props.name}</Text>
            <Text>lastname:{props.lastname}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    txt: {
        fontSize: 100
    }
});
