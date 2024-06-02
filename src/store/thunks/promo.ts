import { ApiRoute } from '@constants';
import { createAppAsyncThunk } from '@hooks/index';
import { Promo } from '@type/promo';

export const fetchPromoAction = createAppAsyncThunk<Promo[], undefined>(
  'data/fetchPromo',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Promo[]>(ApiRoute.Promo);
    return data;
  }
);
