const redux = require("redux");
const {
  incrementReducer,
  // decrementReducer,
  // multiplyReducer,
  additionReducer,
} = require("./incrementReducer");

const rootReducer = redux.combineReducers({
  incrementReducer,
  // decrementReducer,
  // multiplyReducer,
  additionReducer,
});

const store = redux.createStore(rootReducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "MULTIPLY", payload: { value: 5 } });
store.dispatch({ type: "ADDITION", payload: { value: 50 } });
