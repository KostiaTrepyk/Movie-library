import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
        /* Fix me */
        registration(state, action: PayloadAction<{ username: string; email: string; password: string }>) {
            const { username, email } = action.payload;

            state.userData = {
                id: 0,
                username,
                email,
            };
            state.isAuth = true;
        },
        /* Fix me */
        login(state, action: PayloadAction<{ email: string; password: string }>) {
            const { email } = action.payload;

            state.userData = {
                id: 0,
                username: "User",
                email,
            };
            state.isAuth = true;
        },
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
