import { RequestStatus } from '@constants';
import { createSlice } from '@reduxjs/toolkit';
import { fetchSimilarProductsAction } from '@store/thunks/cameras';
import { CameraInfo } from '@type/camera-info';

type SimilarProductsState = {
  products: CameraInfo[];
  status: RequestStatus;
}

const initialState: SimilarProductsState = {
  products: [],
  status: RequestStatus.Idle
};

const similarProductsSlice = createSlice({
  extraReducers: (builder) => builder
    .addCase(fetchSimilarProductsAction.pending, (state) => {
      state.status = RequestStatus.Loading;
    })
    .addCase(fetchSimilarProductsAction.fulfilled, (state, action) => {
      state.status = RequestStatus.Success;
      state.products = action.payload;
    })
    .addCase(fetchSimilarProductsAction.rejected, (state) => {
      state.status = RequestStatus.Failed;
    }),
  name: 'similarProducts',
  initialState,
  reducers: {},
});

const similarProductsActions = similarProductsSlice.actions;

export { similarProductsActions, similarProductsSlice };
