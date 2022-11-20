import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Barer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// -----
// POST @ /users/sinup
// body: {name, email, password}
//  When registration is successful => add token to HTTP-header
// -----

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/singup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log('Error while creating user', error);
    //  It`s needed to add error resolving (in TODO) and show error.message
  }
});

//  -----
// POST @ /users/login
// body: {email, password}
// When login is successful => add token to HTTP-header
// -----

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/user/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log('Error while user is login', error);
    //  It`s needed to add error resolving (in TODO) and show error.message
  }
});

//  -----
// POST @ /users/logout
// header: Authorization: Bearer token
// When logout is successful => remove token from HTTP-header
// -----

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/user/logout');
    token.unset();
  } catch (error) {
    console.log('Error while user is logout', error);
    //  It`s needed to add error resolving (in TODO) and show error.message
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
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return { data };
    } catch (error) {
      // It`s needed to add error resolving (in TODO) and show error.message
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
