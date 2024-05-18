import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import { camerasSlice } from './slices/cameras-data/cameras';
import { cameraSlice } from './slices/camera-data/camera';

export const api = createAPI();

const rootReducer = combineReducers({
  [camerasSlice.name]: camerasSlice.reducer,
  [cameraSlice.name]: cameraSlice.reducer,
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
