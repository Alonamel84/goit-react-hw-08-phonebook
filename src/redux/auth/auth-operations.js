import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // throw error;
    console.log(error);
  }
});
// export default register;

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    throw error;
  }
});
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    throw error;
  }
});
const getCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persisitedToken = state.auth.token;
  // console.log(
  //   '🚀 ~ file: auth-operations.js ~ line 45 ~ getCurrentUser ~ persisitedToken',
  //   persisitedToken,
  // );
  if (persisitedToken === null) {
    // return alert;
    return thunkAPI.rejectWithValue();
  }
  token.set(persisitedToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    throw error;
  }
});
const operations = { getCurrentUser, logIn, register, logOut };
export default operations;
