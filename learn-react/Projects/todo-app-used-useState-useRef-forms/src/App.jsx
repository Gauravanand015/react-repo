import TodoItems from "./components/TodoItems";
import "./App.css";
import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const onNewItems = (todoTask, todoDueDate) => {
    // setTodoItems([...todoItems, { task: todoTask, dueDate: todoDueDate }]); // * one way but on very wide variety of data this way might give you wrong results

    setTodoItems((previousValue) => [
      ...previousValue,
      { task: todoTask, dueDate: todoDueDate },
    ]); // * other way --> known as functional updates
  };

  return (
    <center className="todo-container">
      <AppName />
      <AppTodo onNewItems={onNewItems} />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
