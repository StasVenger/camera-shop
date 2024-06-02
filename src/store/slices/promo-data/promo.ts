import { RequestStatus } from '@constants';
import { createSlice } from '@reduxjs/toolkit';
import { fetchPromoAction } from '@store/thunks/promo';
import { Promo } from '@type/promo';

type PromoState = {
  promoCameras: Promo[];
  status: RequestStatus;
}

const initialState: PromoState = {
  promoCameras: [],
  status: RequestStatus.Idle,
};

const promoSlice = createSlice({
  extraReducers: (builder) => builder
    .addCase(fetchPromoAction.pending, (state) => {
      state.status = RequestStatus.Loading;
    })
    .addCase(fetchPromoAction.fulfilled, (state, action) => {
      state.status = RequestStatus.Success;
      state.promoCameras = action.payload;
    })
    .addCase(fetchPromoAction.rejected, (state) => {
      state.status = RequestStatus.Failed;
    }),
  name: 'promo',
  initialState,
  reducers: {},
});

const promoActions = promoSlice.actions;

export { promoActions, promoSlice };
