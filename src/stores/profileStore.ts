import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface ProfileState {
  username?: string | undefined;
  email?: string | undefined;
  token?: string | undefined;
}

const initialState: ProfileState = {
  username: undefined,
  email: undefined,
  token: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string | undefined>) => {
      state.username = action.payload;
    },
    resetUsername: (state) => {
      state.username = undefined;
    },
    setEmail: (state, action: PayloadAction<string | undefined>) => {
      state.email = action.payload;
    },
    resetEmail: (state) => {
      state.email = undefined;
    },
    setToken: (state, action: PayloadAction<string | undefined>) => {
      state.token = action.payload;
    },
    resetToken: (state) => {
      state.token = undefined;
    },
  },
});

export const {
  resetEmail,
  resetToken,
  resetUsername,
  setEmail,
  setToken,
  setUsername,
} = profileSlice.actions;

export const selectProfile = (state: RootState) => state.profile;

export default profileSlice.reducer;
