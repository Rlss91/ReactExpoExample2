import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function T1() {
    const [btnWidth, setBtnWidth] = useState(Dimensions.get('window').width / 8)
    useEffect(() => {
        const handleUpdateOrientation = () => { setBtnWidth(Dimensions.get('window').width / 8) }
        Dimensions.addEventListener('change', handleUpdateOrientation)
        return () => {
            Dimensions.removeEventListener('change', handleUpdateOrientation)
        }
    }, [])
    const styles = StyleSheet.create({
        txt: {
            fontSize: btnWidth
        }
    })
    return (
        <View>
            <Text style={styles.txt}>T1</Text>
        </View>
    );

}

