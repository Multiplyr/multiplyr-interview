import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  // TODO: Add reducers
  reducer: {
    counter: counterReducer,
  },
});
