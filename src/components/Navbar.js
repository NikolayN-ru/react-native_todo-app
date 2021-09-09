import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppText } from './ui/appText';

export const Navbar = ({ title }) => {
    const q = `-> список дел <-`
    return (
        <View style={styles.navbar}>
            <AppText style={styles.text}>{title}</AppText>
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
        fontSize: 22,
    }
})