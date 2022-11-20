import { configureStore } from '@reduxjs/toolkit';
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

const authPersistConfig = {
  key: 'auth',
  storage,
  whilelist: ['token'],
};

// const middleWare = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authSlice.reducer),
//     contacts: contactsReducer,
//   },
//   middleWare,
//   devTools: process.env.NODE_ENV === 'development',
// });

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    contacts: contactsReducer,
  },
  // middleware,
  // devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
