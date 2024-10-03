import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
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
