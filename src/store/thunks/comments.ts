import { ApiRoute } from '@constants';
import { createAppAsyncThunk } from '@hooks/index';
import { Comment } from '@type/comments';

export const fetchCommentsAction = createAppAsyncThunk<Comment[], string>(
  'data/fetchComments',
  async (cameraId, { extra: api }) => {
    const { data } = await api.get<Comment[]>(`${ApiRoute.Cameras}/${cameraId}/reviews`);
    return data;
  }
);
