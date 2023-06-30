import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import AuthReducer from "./AuthSlice/AuthSlice";
import { MovieApi1 } from "../services/MovieApi1";
import { MovieApi2 } from "../services/MovieApi2";

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        [MovieApi1.reducerPath]: MovieApi1.reducer,
        [MovieApi2.reducerPath]: MovieApi2.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(MovieApi1.middleware, MovieApi2.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
