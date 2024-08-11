import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Basket } from '@type/basket';

type BasketState = {
  cameras: Basket[];
}

const initialState: BasketState = {
  cameras: JSON.parse(localStorage.getItem('basketItems') || '[]') as Basket[]
};

const updateLocalStorage = (cameras: Basket[]) => {
  localStorage.setItem('basketItems', JSON.stringify(cameras));
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItemToBasket(state, action: PayloadAction<Basket>) {
      const existingCamera = state.cameras.find((camera) => camera.id === action.payload.id);
      if (existingCamera) {
        existingCamera.count += action.payload.count;
        existingCamera.totalPrice += action.payload.totalPrice;
      } else {
        state.cameras.push({
          ...action.payload,
          count: 1,
          totalPrice: action.payload.price,
        });
      }
      updateLocalStorage(state.cameras);
    },
    removeItemFromBasket(state, action: PayloadAction<number>) {
      state.cameras = state.cameras.filter((camera) => Number(camera.id) !== action.payload);
      updateLocalStorage(state.cameras);
    },
    updateItemCount(state, action: PayloadAction<{ id: number; count: number; totalPrice: number }>) {
      const camera = state.cameras.find((item) => Number(item.id) === action.payload.id);
      if (camera) {
        camera.count = action.payload.count;
        camera.totalPrice = action.payload.totalPrice;
      }
      updateLocalStorage(state.cameras);
    },
    clearBasket(state) {
      state.cameras = [];
      localStorage.removeItem('basketItems');
    }
  },
});

const basketActions = {...basketSlice.actions};
const basketReducer = basketSlice.reducer;

export { basketActions, basketSlice, basketReducer };
