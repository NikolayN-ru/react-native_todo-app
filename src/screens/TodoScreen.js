import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { Card } from "../components/ui/card";
import { AppText } from "../components/ui/appText";
import { Navbar } from '../components/Navbar';

export const TodoScreen = ({ todo, backTodos, removeTodo, renameTodoMain }) => {
  const [refresh, setRefresh] = useState(false);
  const [delo, setDelo] = useState(todo.title);

  const removeTodoView = () => {
    backTodos();
    removeTodo(todo.id);
  };

  const renameTodo = () => {
    setRefresh(!refresh);
  };

  const rew = () => {
    backTodos();
    renameTodoMain(todo.id, delo);
  };

  if (refresh) {
    return (
      <View style={styles.container2}>
        <AppText>отредактировать дело :</AppText>
        <TextInput
          style={styles.textinput}
          color="#FF9200"
          value={delo}
          onChangeText={(text) => setDelo(text)}
        />
        <View style={styles.button}>
          <Button
            color="#FF9200"
            title="сохранить и вернуться"
            onPress={renameTodo}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View>
      <Navbar title={`-> дело номер: ${todo.id} <-`}/>
      <View style={styles.container}>
        
        <Card>
            <AppText style={styles.text}>todo-screen: {delo}</AppText>
          <Text style={styles.text}>id: {todo.id}</Text>
        </Card>
        <View style={styles.button}>
          <Button color="#FF9200" title="НАЗАД" onPress={rew} />
        </View>
        <View style={styles.button}>
          <Button color="white" title="УДАЛИТЬ" onPress={removeTodoView} />
        </View>
        <View style={styles.button}>
          <Button
            color="#FF9200"
            title="РЕДАКТИРОВАТЬ"
            onPress={() => setRefresh(!refresh)}
          />
        </View>
      </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    color: "red",
    // fontFamily: "font-1"
  },
  container: {
    margin: 50,
  },
  container2: {
    width: "70%",
    margin: 50,
    marginTop: 150,
  },
  button: {
    backgroundColor: "#A62F00",
    marginTop: 10,
    borderRadius: 10,
  },
  textinput: {
    marginTop: 20,
    padding: 8,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#FF7800",
    borderWidth: 4,
  },
});
