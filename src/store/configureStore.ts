import { configureStore as createStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import rootReducer from '../reducers';

const configureStore = () =>
  createStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  });

export default configureStore;
