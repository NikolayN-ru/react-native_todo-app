import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Todo = ({ item, onRemove, TodoIdView }) => {
  const LongPressHandler = () => {
    onRemove(item.id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.1}
      onPress={() => TodoIdView(item.id)}
      onLongPress={LongPressHandler}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#BF5930",
    margin: 10,
    fontFamily: 'font-1'
  },
  container: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#FF7800",
  },
});
