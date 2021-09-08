import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Todo = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#BF5930',
        margin: 10,
    },
    container: {
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#FF7800',
    }
})
