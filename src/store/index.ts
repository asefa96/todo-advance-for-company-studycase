import { configureStore } from "@reduxjs/toolkit";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import todoSlices from "./slices/todoSlices";

export const store = configureStore({
  reducer: {
    todos: todoSlices,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
