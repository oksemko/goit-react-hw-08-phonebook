// eslint-disable-next-line
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// ((https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data) ===> link!)
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contacts-reducer';
import authSlice from './auth/auth-slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    contacts: contactsReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
