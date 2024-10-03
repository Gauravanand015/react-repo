const INITIAL_VALUE = {
  counter: 0,
};

export const counterReducer = (state = INITIAL_VALUE, action) => {
  const { type } = action;
  let newState = state;
  switch (type) {
    case "INCREMENT":
      newState = {
        ...state,
        counter: state.counter + 1,
      };
      break;

    case "DECREMENT":
      newState = {
        ...state,
        counter: state.counter - 1,
      };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
};
