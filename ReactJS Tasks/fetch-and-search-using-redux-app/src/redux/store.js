import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./reducers";

export const storePosts = configureStore({
  reducer: postReducer,
});