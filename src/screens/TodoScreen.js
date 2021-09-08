import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

export const TodoScreen = ({ todo, backTodos, removeTodo, renameTodoMain }) => {
  const [refresh, setRefresh] = useState(false);
  const [delo, setDelo] = useState(todo.title);

  const removeTodoView = () => {
    backTodos();
    removeTodo(todo.id);
  };

  const renameTodo = () => {
    setRefresh(!refresh)
    // renameTodoMain(deloId, delo)
  }

  const rew = () => {
    backTodos();
    // let deloId = todo.id
    // console.log(deloId, '^^^^^', delo)
    // renameTodoMain(Number(deloId), delo)
  }

  if (refresh) {
    return (
        <View style={styles.container}>
            <TextInput value={delo} onChangeText={text => setDelo(text)}/>
            <Button title="обратно" onPress={renameTodo} />
        </View>

    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>todo-screen {delo}</Text>
        <Text style={styles.text}>id {todo.id}</Text>
        <Button title="BACK" onPress={rew} />
        <Button title="REMOVE" onPress={removeTodoView} />
        <Text>________________________________</Text>
        <Button title="РЕДАКТИРОВАТЬ" onPress={() => setRefresh(!refresh)} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
  container: {
    margin: 50,
  },
});
