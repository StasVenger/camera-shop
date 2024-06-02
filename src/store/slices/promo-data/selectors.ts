import { State } from '@type/state';

export const selectPromoCameras = (state: State) => state.promo.promoCameras;
export const selectPromoStatus = (state: State) => state.promo.status;
