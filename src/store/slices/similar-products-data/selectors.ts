import { State } from '@type/state';

export const selectSimilarProducts = (state: State) => state.similarProducts.products;
export const selectSimilarProductsStatus = (state: State) => state.similarProducts.status;
