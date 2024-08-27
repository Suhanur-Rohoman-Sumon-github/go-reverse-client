import { createSlice } from '@reduxjs/toolkit';

type TAuthState = {
    user:string | null;
    token: string | null;
};

const initialState: TAuthState = {
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            
            console.log(action.payload);
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
