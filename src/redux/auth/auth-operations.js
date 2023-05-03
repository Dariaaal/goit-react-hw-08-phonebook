import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };

export const register = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    try {
        const { data } = await axios.post('/users/logout');
        token.unset(data.token);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

