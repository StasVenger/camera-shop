import { ApiRoute } from '@constants';
import { createAppAsyncThunk } from '@hooks/index';
import { Orders } from '@type/orders';

export const addOrder = createAppAsyncThunk<Orders, Orders>(
  'orders/addOrder',
  async (order, { extra: api }) => {
    const { data } = await api.post<Orders>(`${ApiRoute.Orders}`, order);
    return data;
  }
);
