import { createSlice } from "@reduxjs/toolkit";
import * as authOperations from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isPending: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.pending](state, _) {
            state.isPending = true;
          },
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.register.rejected](state, _) {
            state.isPending = false;
          },
        [authOperations.logIn.pending](state, _) {
            state.isPending = true;
          },
        [authOperations.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.logIn.rejected](state, _) {
            state.isPending = false;
          },
        [authOperations.logOut.pending](state, _) {
            state.isPending = true;
        },
        [authOperations.logOut.fulfilled](state, _) {
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
            state.isPending = false;
        },
        [authOperations.fetchCurrentUser.pending](state, _) {
            state.isRefreshing = true;
            state.isPending = true;
          },
        [authOperations.fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        [authOperations.fetchCurrentUser.rejected](state, _) {
            state.isFetchingCurrentUser = false;
            state.isPending = false;
          },
    },
});

export default authSlice.reducer;