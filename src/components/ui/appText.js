import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const AppText = props => {
    return (
        <Text style={styles.conteiner}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        fontFamily: 'font-1',
        fontSize: 20,
        color: "#FF9200"
    }
})