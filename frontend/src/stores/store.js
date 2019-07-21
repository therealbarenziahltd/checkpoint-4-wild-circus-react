import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import LocalStorage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import allReducer from './reducers';

const persistConfig = {
  key: 'wild-circus-key',
  storage: LocalStorage
};

const persistedReducer = persistReducer(persistConfig, allReducer);

// eslint-disable-next-line no-undef
const store = process.env.NODE_ENV === 'production'
  ?
  createStore(
    persistedReducer,
    applyMiddleware(thunk)
  )
  :
  createStore(
    persistedReducer,
    applyMiddleware(thunk, logger)
  );

export default store;