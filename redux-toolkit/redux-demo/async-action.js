const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
  loading: false,
  user: [],
  error: "",
};

const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USER_SUCCEEDED = "FETCH_USER_SUCCEEDED";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";

function fetchUserRequested() {
  return {
    type: FETCH_USER_REQUESTED,
  };
}

function fetchUserSucceeded(user) {
  return {
    type: FETCH_USER_SUCCEEDED,
    payload: user,
  };
}

function fetchUserFailed(error) {
  return {
    type: FETCH_USER_FAILED,
    payload: error,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCEEDED:
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case FETCH_USER_FAILED:
      return {
        loading: false,
        user: [],
        error: action.payload,
      };
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequested());
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const users = res.data.map((user) => user.id);
        dispatch(fetchUserSucceeded(users));
      })
      .catch((err) => {
        dispatch(fetchUserFailed(err.message));
      });
  };
};
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
