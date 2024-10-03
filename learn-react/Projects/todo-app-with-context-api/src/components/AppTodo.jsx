import { useContext, useRef } from "react";
import { TodoContext } from "../store/TodoContext";

const AppTodo = () => {
  const { addNewItem } = useContext(TodoContext);
  const todoTaskElement = useRef();
  const dueDateElement = useRef();

  const formHandler = (event) => {
    event.preventDefault();
    // console.log(
    //   `${todoTaskElement.current.value} due date on : ${dueDateElement.current.value}`
    // );

    const todoName = todoTaskElement.current.value;
    const dueDate = dueDateElement.current.value;

    addNewItem(todoName, dueDate);

    todoTaskElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={formHandler}>
        <div className="col-6">
          <input
            type="text"
            ref={todoTaskElement}
            placeholder="Enter Todo Here"
            required
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} required />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppTodo;
