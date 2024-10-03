export const todoReducer = (state, action) => {
  const { type, payload } = action;

  let newTodoList = state;

  switch (type) {
    case "NEW_TODO":
      newTodoList = [
        ...state,
        { task: payload.todoTask, dueDate: payload.todoDueDate },
      ];
      break;

    case "DELETE_TODO":
      newTodoList = state.filter(
        (todoItem) => todoItem.task !== payload.todoName
      );
      break;

    default:
      newTodoList = state;
      break;
  }

  // if (type === "NEW_TODO") {
  //   newTodoList = [
  //     ...state,
  //     { task: payload.todoTask, dueDate: payload.todoDueDate },
  //   ];
  // } else if (type === "DELETE_TODO") {
  //   newTodoList = state.filter(
  //     (todoItem) => todoItem.task !== payload.todoName
  //   );
  // }

  return newTodoList;
};
