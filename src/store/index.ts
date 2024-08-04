import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import { camerasSlice } from './slices/cameras-data/cameras';
import { cameraSlice } from './slices/camera-data/camera';
import { commentsSlice } from './slices/comments-data/comments';
import { similarProductsSlice } from './slices/similar-products-data/similar-products';
import { promoSlice } from './slices/promo-data/promo';
import { basketSlice } from './slices/basket-data/basket';

export const api = createAPI();

const rootReducer = combineReducers({
  [camerasSlice.name]: camerasSlice.reducer,
  [cameraSlice.name]: cameraSlice.reducer,
  [commentsSlice.name]: commentsSlice.reducer,
  [similarProductsSlice.name]: similarProductsSlice.reducer,
  [promoSlice.name]: promoSlice.reducer,
  [basketSlice.name]: basketSlice.reducer,
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
