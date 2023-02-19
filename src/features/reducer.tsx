import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAuthenticateState } from "../types";
import { RootState } from "./store";

export const initialState: TAuthenticateState = {
  isloggedIn: false,
  user: "",
};

// A slice
const authenticationSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    authenticateUser: (
      state: TAuthenticateState,
      action: PayloadAction<TAuthenticateState>
    ) => {
      const { isloggedIn, user } = action.payload;
      return { isloggedIn: isloggedIn, user: user };
    },
  },
});

export const { authenticateUser } = authenticationSlice.actions;

export const authenticateReducer = authenticationSlice.reducer;

export const selectLoggedInUser = (state: RootState) =>
  state.authentication.isloggedIn;
export const selectUser = (state: RootState) =>
  state.authentication.user;
