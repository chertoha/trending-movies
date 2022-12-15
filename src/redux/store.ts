import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./moviesApi";
import { prevPageSlice } from "./prevPageSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    prevPage: prevPageSlice.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

// export type AppStore = ReturnType<typeof store>;
// export const wrapper = createWrapper(store);
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
