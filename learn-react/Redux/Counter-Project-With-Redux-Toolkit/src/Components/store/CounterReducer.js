import { createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUE = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_VALUE,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    add: (state, action) => {
      console.log(action);
      state.counter += Number(action.payload);
    },
    subtract: (state, action) => {
      console.log(action);
      state.counter -= Number(action.payload);
    },
  },
});

export const createCounterAction = counterSlice.actions;
