import { configureStore } from "@reduxjs/toolkit";
import stringReducer from "./slices/stringSlice";
import settingsReducer from "./slices/settingSlice";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    string: stringReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;