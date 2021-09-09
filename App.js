import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';


async function loadApplication() {
  await Font.loadAsync({
    'font-1': require('./assets/fonts/rrr.ttf'),
    'font-3': require('./assets/fonts/font-3.ttf'),
    'font-4': require('./assets/fonts/font-4.ttf'),
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const title = `-> список дел <-`;
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    )
  }

  const addTodo = async title => {
    const newTodo = { id: Date.now().toString(), title: title };
    
    const response = await fetch('https://react-native-1-22734-default-rtdb.firebaseio.com/todos.json', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({title})
    })
    const data = await response.json()
    console.log(data.name)
    setTodos((prev) => [newTodo, ...prev]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };

  const TodoIdView = (id) => {
    setTodoId(id);
  };

  const renameTodoMain = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id == id) {
          item.title = text;
        }
        return item;
      })
    );
  };

  let content = (
    <MainScreen
      removeTodo={removeTodo}
      addTodo={addTodo}
      title={title}
      todos={todos}
      TodoIdView={TodoIdView}
    />
  );

  if (todoId) {
    let todo = todos.filter((todo) => todo.id == todoId);
    // console.log("******", todo);
    content = (
      <TodoScreen
        todo={todo[0]}
        backTodos={() => setTodoId(null)}
        removeTodo={removeTodo}
        renameTodoMain={renameTodoMain}
      />
    );
  }

  return <ScrollView style={styles.container}>{content}</ScrollView>;
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
