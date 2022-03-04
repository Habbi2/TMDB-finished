import { createAction } from "@reduxjs/toolkit";

export const dropURL = createAction("DROP_URL");

export const setURL = createAction("SET_URL");

const defaultState = "";

const urlReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "DROP_URL":
      return defaultState;
    case "SET_URL":
      state = payload;
      return state;
    default:
      return state;
  }
};

export default urlReducer;
