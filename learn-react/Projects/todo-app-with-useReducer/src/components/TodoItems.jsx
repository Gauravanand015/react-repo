import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoContext } from "../store/TodoContext";

const TodoItems = () => {
  const { todoItems } = useContext(TodoContext);
  console.log(todoItems);
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          key={item.task}
          todoName={item.task}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
