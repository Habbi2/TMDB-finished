import { createAction } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");

export const logOutUser = createAction("LOGOUT_USER");

const usersDefaultState = {};

const userReducer = (state = usersDefaultState, { type, payload }) => {
  switch (type) {
    case "LOGOUT_USER":
      return usersDefaultState;
    case "SET_USER":
      state = payload;
      return state;
    default:
      return state;
  }
};

export default userReducer;
