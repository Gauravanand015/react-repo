const redux = require("redux");
const createStore = redux.createStore;
const produce = require("immer").produce;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const initialState = {
  name: "Gaurav",
  address: {
    street: "Campbell",
    city: "Lucknow",
    country: "India",
  },
};

const STREET_UPDATE = "STREET_UPDATED";

function updateStreet(street) {
  return {
    type: STREET_UPDATE,
    payload: street,
  };
}

const streetReducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

// const rootReducer = combineReducers({
//   cake: cakeReducer,
//   iceCream: iceCreamReducer,
// });
const store = createStore(streetReducer, applyMiddleware(logger));
console.log("INITIAL STATE", store.getState());
const unsubscribe = store.subscribe(() => {
  store.getState();
});

store.dispatch(updateStreet("balaganj"));
unsubscribe();
