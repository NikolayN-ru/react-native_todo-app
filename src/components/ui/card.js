import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

export const Card = props => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => Alert.alert('наше дело')}>
            {props.children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 8,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderStyle: "solid",
        borderColor: "#FF7800",
        borderWidth: 4,
    },
    div: {

    }
})