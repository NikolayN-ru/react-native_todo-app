import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const title = `-> список дел <-`;
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = { id: Date.now().toString(), title: title };
    // setTodos(todos.concat([newTodo]))
    setTodos((prev) => [newTodo, ...prev]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };

  const TodoIdView = (id) => {
    setTodoId(id);
  };

  const renameTodoMain = (id, text) => {
    setTodos((prev) => prev.forEach((item) => {if(item.id == id){}}));
    console.log(todos)
  }

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
