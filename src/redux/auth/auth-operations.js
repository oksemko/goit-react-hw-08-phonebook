import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// -----
// POST @ /users/sinup
// body: {name, email, password}
//  When registration is successful => add token to HTTP-header
// -----

//credentials => name, e-mail, password

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/singup', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
      // console.log('Error while creating user', error);
      //  It`s needed to add error resolving and show error.message
    }
  }
);

//  -----
// POST @ /users/login
// body: {email, password}
// When login is successful => add token to HTTP-header
// -----

//credentials => e-mail, password

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('/users/login', credentials);
    // After successful login, add the token to the HTTP header
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
    // console.log('Error while user is login', error);
    //  It`s needed to add error resolving and show error.message
  }
});

//  -----
// POST @ /users/logout
// headers: Authorization: Bearer token
// When logout is successful => remove token from HTTP-header
// -----

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
    // console.log('Error while user is logout', error);
    //  It`s needed to add error resolving and show error.message
  }
});

//  -----
// GET @ /users/current
// header: Authorization: Bearer token
// (1. get token via getState(); 2. when there is no token => go out  without performing
// any operations; 3. when there is token => add token in HTTP-header and perform operation)
// -----

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue();
    }

    setAuthHeader(persistedToken);
    // token.set(persistedToken);
    try {
      // If there is a token, add it to the HTTP header and perform the request
      // setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
      // It`s needed to add error resolving and show error.message
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;
