import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./moviesApi";
import { createWrapper } from "next-redux-wrapper";

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

// export type AppStore = ReturnType<typeof store>;
export const wrapper = createWrapper(store);
