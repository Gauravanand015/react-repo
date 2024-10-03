import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./CounterReducer";

const createCounterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default createCounterStore;
