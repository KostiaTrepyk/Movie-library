import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
    userData: { id: number; username: string; email: string } | null;
    isAuth: boolean;
};

const initialState: AuthState = {
    userData: null,
    isAuth: false,
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.userData = null;
            state.isAuth = false;
        },
    },
    extraReducers(builder) {},
});

export const AuthActions = AuthSlice.actions;

const AuthReducer = AuthSlice.reducer;
export default AuthReducer;
