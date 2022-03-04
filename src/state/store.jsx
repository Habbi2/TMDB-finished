import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./userReducer";
import moviesReducer from "./moviesReducer";
import urlReducer from "./urlReducer";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    url: urlReducer,
  },
});

export default store;
