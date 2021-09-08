import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export const AddTodo = props => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textinput} placeholder="введите дело"/>
            <Button title="добавить"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    textinput: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#A62F00',
    }
})