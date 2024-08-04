import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CameraInfo } from '@type/camera-info';

type BasketState = {
  cameras: CameraInfo[];
}

const initialState: BasketState = {
  cameras: JSON.parse(localStorage.getItem('basketItems') || '[]') as CameraInfo[]
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItemToBasket(state, action: PayloadAction<CameraInfo>) {
      state.cameras.push(action.payload);
      localStorage.setItem('basketItems', JSON.stringify(state.cameras));
    },
  },
});

const basketActions = {...basketSlice.actions};
const basketReducer = basketSlice.reducer;

export { basketActions, basketSlice, basketReducer };
