import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { pokeReducer } from "./pokeSlice";

export const store = configureStore({
  reducer: {
    poke: pokeReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
