import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Navbar } from '../components/Navbar';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({ removeTodo, addTodo, title, todos, TodoIdView }) => {
    return (
        <View>
            <Navbar title={title}/>
            <AddTodo addTodo={addTodo}/>
            { todos.length ? <View>
                {todos.map((item) => <Todo onRemove={removeTodo} key={item.id} item={item} TodoIdView={TodoIdView}/>)}
            </View> : <Image source={require('../images.png')} />}
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#BF5930',
        margin: 10,
        marginLeft: 30
    },
    container: {

    }
})
