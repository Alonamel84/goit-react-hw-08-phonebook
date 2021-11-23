import { combineReducers } from 'redux';
import { configureStore, createReducer } from '@reduxjs/toolkit';
import {
  filterContactError,
  filterContactRequest,
  filterContactSuccess,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  addContactSuccess,
  addContactRequest,
  addContactError,
} from './actions';
import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/lib/storage';
import { AuthReducer } from '../auth';
import { configure } from '@testing-library/dom';
import persistStore from 'redux-persist/es/persistStore';

const filterReducer = createReducer('', {
  [filterContactSuccess]: (state, { payload }) => payload,
});
const itemsReducer = createReducer([], {
  [addContactSuccess]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContactSuccess]: (state, { payload }) => state.filter(item => item.id !== payload),
});

const loading = createReducer(false, {
  [deleteContactSuccess]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactError]: () => true,
  [addContactSuccess]: () => false,
  [addContactRequest]: () => true,
  [addContactError]: () => true,
  [filterContactSuccess]: () => false,
  [filterContactRequest]: () => true,
  [filterContactError]: () => true,
});

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };
// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, AuthReducer),
//     items: itemsReducer,
//     filter: filterReducer,
//   },
// });

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  // auth: persistReducer(authPersistConfig, AuthReducer),
});

// export const persistor = persistStore(store);
