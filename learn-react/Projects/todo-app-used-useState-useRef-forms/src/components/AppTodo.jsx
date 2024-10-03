// import { useState } from "react";

import { useRef } from "react";

// ! we are using useState for this input now i am going to use useRef

// function AppTodo({ onNewItems }) {
//   const [todoTask, setTodoTask] = useState("");
//   const [dueDate, setDueDate] = useState("");

//   const textInputHandler = (event) => {
//     setTodoTask(event.target.value);
//   };

//   const dueDateInputHandler = (event) => {
//     setDueDate(event.target.value);
//   };

//   const handleAddButton = () => {
//     onNewItems(todoTask, dueDate);
//     setDueDate("");
//     setTodoTask("");
//   };

//   return (
//     <div className="container text-center">
//       <div className="row kg-row">
//         <div className="col-6">
//           <input
//             type="text"
//             placeholder="Enter Todo Here"
//             onChange={textInputHandler}
//             value={todoTask}
//           />
//         </div>
//         <div className="col-4">
//           <input type="date" onChange={dueDateInputHandler} value={dueDate} />
//         </div>
//         <div className="col-2">
//           <button
//             type="button"
//             className="btn btn-success kg-button"
//             onClick={handleAddButton}
//           >
//             Add
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AppTodo;

// *=================================================================================

const AppTodo = ({ onNewItems }) => {
  const todoTaskElement = useRef();
  const dueDateElement = useRef();

  const formHandler = (event) => {
    event.preventDefault();
    // console.log(
    //   `${todoTaskElement.current.value} due date on : ${dueDateElement.current.value}`
    // );

    const todoName = todoTaskElement.current.value;
    const dueDate = dueDateElement.current.value;

    onNewItems(todoName, dueDate);

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
