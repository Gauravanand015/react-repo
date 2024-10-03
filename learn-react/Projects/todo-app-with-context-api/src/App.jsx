import TodoItems from "./components/TodoItems";
import "./App.css";
import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import { useState } from "react";
import { TodoContext } from "./store/TodoContext";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (todoTask, todoDueDate) => {
    // setTodoItems([...todoItems, { task: todoTask, dueDate: todoDueDate }]); // * one way but on very wide variety of data this way might give you wrong results

    setTodoItems((previousValue) => [
      ...previousValue,
      { task: todoTask, dueDate: todoDueDate },
    ]); // * other way --> known as functional updates
  };

  const deleteItem = (todoName) => {
    let filteredData = todoItems.filter(
      (todoItem) => todoItem.task !== todoName
    );

    setTodoItems(filteredData);
  };

  return (
    <TodoContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      <center className="todo-container">
        <AppName />
        <AppTodo />
        <TodoItems />
      </center>
    </TodoContext.Provider>
  );
}

export default App;
