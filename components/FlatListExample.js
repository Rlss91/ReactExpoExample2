import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, FlatList } from 'react-native';
import FlatListItemExample from './FlatListItemExample'

export default function FlatListExample() {
    const DATA = [{
        id: '12341556345341312355',
        username: 'ergwrsfsef',
        name: 'sdfjkergnreg',
        lastname: 'ferflkerlkelk'
    },
    {
        id: '123415562345341312355',
        username: 'sergsefaef',
        name: 'wefqfsdg',
        lastname: 'r43gers'
    }, {
        id: '12341556312341312355',
        username: 'rewg234rwa',
        name: '142t43f',
        lastname: 'werg234'
    }, {
        id: '1234142345341312355',
        username: '2r4werfer',
        name: 'wef3434r',
        lastname: 'wreg34'
    }]
    return (
        <View styles={styles.container}>
            <FlatList
                //numColumns={2}
                horizontal={true}
                data={DATA}
                renderItem={({ item }) => (
                    <FlatListItemExample
                        {...item}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        flexWrap: 'wrap'
    }
});
