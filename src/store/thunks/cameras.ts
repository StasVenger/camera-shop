import { ApiRoute } from '@constants';
import { createAppAsyncThunk } from '@hooks/index';
import { CameraInfo } from '@type/camera-info';

export const fetchCamerasAction = createAppAsyncThunk<CameraInfo[], undefined>(
  'data/fetchCameras',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<CameraInfo[]>(ApiRoute.Cameras);
    return data;
  }
);

export const fetchCameraByIdAction = createAppAsyncThunk<CameraInfo, string>(
  'data/fetchCameraById',
  async (cameraId, { extra: api }) => {
    const { data } = await api.get<CameraInfo>(`${ApiRoute.Cameras}/${cameraId}`);
    return data;
  }
);

export const fetchSimilarProductsAction = createAppAsyncThunk<CameraInfo[], string>(
  'data/fetchSimilarProducts',
  async (cameraId, { extra: api }) => {
    const { data } = await api.get<CameraInfo[]>(`${ApiRoute.Cameras}/${cameraId}/similar`);
    return data;
  }
);
