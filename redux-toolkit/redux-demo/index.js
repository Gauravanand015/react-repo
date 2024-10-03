const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const ICE_CREAM_RESTOCKED = "ICE_CREAM_RESTOCKED";

const CAKE_INITIAL_STATE = {
  numberOfCakes: 10,
};

const ICE_CREAM_INITIAL_STATE = {
  numberOfIceCreams: 20,
};

function orderIceCreams() {
  return {
    type: "ICE_CREAM_ORDERED",
    quantity: 1,
  };
}

function restockIceCreams(qty = 3) {
  return {
    type: ICE_CREAM_RESTOCKED,
    payload: qty,
  };
}

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function reStockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

const cakeReducer = (state = CAKE_INITIAL_STATE, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = ICE_CREAM_INITIAL_STATE, action) => {
  switch (action.type) {
    case ICE_CREAM_ORDERED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    case ICE_CREAM_RESTOCKED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);

console.log("INITIAL_STATE", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("UPDATED_STATE", store.getState());
});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(reStockCake(5));
store.dispatch(orderIceCreams());
store.dispatch(orderIceCreams());
store.dispatch(orderIceCreams());
store.dispatch(orderIceCreams());
store.dispatch(orderIceCreams());
store.dispatch(restockIceCreams(6));
unsubscribe();
