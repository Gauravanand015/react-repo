const INITIAL_VALUE = {
  counter: 50,
};

const incrementReducer = (state = INITIAL_VALUE, action) => {
  const { type, payload } = action;
  let newState = state;
  switch (type) {
    case "INCREMENT":
      newState = { ...state, counter: state.counter + 1 };
      break;
    case "DECREMENT":
      newState = { ...state, counter: state.counter - 1 };
      break;
    case "MULTIPLY":
      newState = { ...state, counter: state.counter * payload.value };
      break;
    case "ADDITION":
      newState = { ...state, counter: state.counter + payload.value };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};

// const decrementReducer = (state = INITIAL_VALUE, action) => {
//   const { type, payload } = action;
//   let newState = state;
//   switch (type) {
//     case "DECREMENT":
//       newState = { ...state, counter: state.counter - 1 };
//       break;
//     default:
//       newState = state;
//       break;
//   }
//   return newState;
// };

// const multiplyReducer = (state = INITIAL_VALUE, action) => {
//   const { type, payload } = action;
//   let newState = state;
//   switch (type) {
//     case "MULTIPLY":
//       newState = { ...state, counter: state.counter * 2 };
//       break;
//     default:
//       newState = state;
//       break;
//   }
//   return newState;
// };

const additionReducer = (state = INITIAL_VALUE, action) => {
  const { type, payload } = action;
  let newState = state;
  switch (type) {
    case "ADDITION":
      newState = { ...state, counter: state.counter + payload.value };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};

module.exports = {
  incrementReducer,
  // decrementReducer,
  // multiplyReducer,
  additionReducer,
};
