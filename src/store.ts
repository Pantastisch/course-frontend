import { loadState, saveState } from "./localStorage";

import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./stores/profileStore";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    profile: store.getState().profile,
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
