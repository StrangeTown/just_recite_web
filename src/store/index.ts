import { configureStore } from "@reduxjs/toolkit";
import stringReducer from "./slices/stringSlice";

const store = configureStore({
  reducer: {
    string: stringReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;