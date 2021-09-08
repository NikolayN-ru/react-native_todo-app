import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

export const AddTodo = ({ addTodo }) => {
    const [value, setValue] = useState([])

    const Submit = () => {
        if (value.trim()) {
            addTodo(value)
            setValue('')
        } else {
            Alert.alert('введите дело')
        }
    }
    
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textinput} 
                placeholder="введите дело"
                onChangeText={text => setValue(text)}
                value={value}
            />
            <Button title="добавить" onPress={Submit}/>
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
