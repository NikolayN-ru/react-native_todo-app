import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';

export default function App() {
  const title = `-> список дел <-`
  const [todos, setTodos] = useState([])
  
  const addTodo = title => {
    const newTodo = { id: Date.now().toString(), title: title}
    // setTodos(todos.concat([newTodo]))
    setTodos((prev) => [newTodo, ...prev])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id != id))
  }

  return (
    <ScrollView style={styles.container}>
      <Navbar title={title}/>
      <AddTodo addTodo={addTodo}/>
      <View>
        {todos.map((item) => <Todo onRemove={removeTodo} key={item.id} item={item}/>)}
      </View>
 
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'column',
    // // height: 300,
    // backgroundColor: '#123777',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    // flex: 0.25,
    // color: 'white',
    // fontSize: 26,
  },
});
