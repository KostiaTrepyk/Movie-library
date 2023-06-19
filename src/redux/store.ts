import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthSlice/AuthSlice";
import { MovieApi } from "../services/Movie";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        [MovieApi.reducerPath]: MovieApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(MovieApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
