import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, Platform } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={props.onPress}>
            <Text
                style={{
                    ...props.style,
                    ...styles.centerText,
                    ...Platform.select(
                        {
                            android: styles.centerTextAndroid,
                            ios: styles.centerTextIOS
                        })
                }}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerText: {
        textAlign: 'center'
    },
    centerTextAndroid: {
        textAlignVertical: 'center',
        textAlign: 'left'
    },
    centerTextIOS: {
        textAlign: 'justify'
    }
})

export default Button