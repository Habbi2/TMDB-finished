import { createAction } from "@reduxjs/toolkit";

export const dropsMovies = createAction("DROP_MOVIES");

export const setMovies = createAction("SET_MOVIES");

const defaultState = {};

const moviesReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "DROP_MOVIES":
      return defaultState;
    case "SET_MOVIES":
      state = payload;
      return state;
    default:
      return state;
  }
};

export default moviesReducer;
