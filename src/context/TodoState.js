import React, { useReduser } from "react";
import { TodoContext } from "./todoContext";
import { todoReduser } from "./todoReduser";

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [{ id: 1, title: "Hello-1" }],
  };
  const [state, dispatch] = useReduser(todoReduser, initialState);

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
