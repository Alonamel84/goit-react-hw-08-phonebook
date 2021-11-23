import { combineReducers } from 'redux';
import authReducer from './auth/auth-slice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts.reducers';
import storage from 'redux-persist/lib/storage';
import { configure } from '@testing-library/dom';
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

// const store = configureStore({ reducer: rootReducer });
// export default store;

//========================================///

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const rootReducer = combineReducers({
//   auth: persistReducer(authPersistConfig, authReducer),
//   contacts: contactsReducer,
// });
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
