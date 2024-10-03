import { createStore } from "redux";
import { counterReducer } from "./CounterReducer";

const createCounterStore = createStore(counterReducer);

export default createCounterStore;
