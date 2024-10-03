import { createContext, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const TodoContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const TODO_PROVIDER = ({ children }) => {
  const [todoItems, disPatchTodoItems] = useReducer(todoReducer, []);

  const addNewItem = (todoTask, todoDueDate) => {
    const newItemActions = {
      type: "NEW_TODO",
      payload: {
        todoTask,
        todoDueDate,
      },
    };

    disPatchTodoItems(newItemActions);
  };

  const deleteItem = (todoName) => {
    const deleteItemActions = {
      type: "DELETE_TODO",
      payload: {
        todoName,
      },
    };

    disPatchTodoItems(deleteItemActions);
  };

  return (
    <TodoContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TODO_PROVIDER;
