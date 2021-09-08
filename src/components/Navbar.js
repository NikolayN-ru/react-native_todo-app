import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Navbar = ({ title }) => {
    const q = `-> список дел <-`
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 55,
        paddingBottom: 10,
        backgroundColor: '#FF4900',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    text: {
        color: 'white',
        fontSize: 16,
    }
})