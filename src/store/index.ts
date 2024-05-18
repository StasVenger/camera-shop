import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import { camerasSlice } from './slices/cameras-data/cameras';

export const api = createAPI();

const rootReducer = combineReducers({
  [camerasSlice.name]: camerasSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});
