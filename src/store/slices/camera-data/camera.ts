import { RequestStatus } from '@constants';
import { createSlice } from '@reduxjs/toolkit';
import { fetchCameraByIdAction } from '@store/thunks/cameras';
import { CameraInfo } from '@type/camera-info';

type CameraState = {
  camera: CameraInfo | null;
  status: RequestStatus;
}

const initialState: CameraState = {
  camera: null,
  status: RequestStatus.Idle,
};

const cameraSlice = createSlice({
  extraReducers: (builder) => builder
    .addCase(fetchCameraByIdAction.pending, (state) => {
      state.status = RequestStatus.Loading;
    })
    .addCase(fetchCameraByIdAction.fulfilled, (state, action) => {
      state.status = RequestStatus.Success;
      state.camera = action.payload;
    })
    .addCase(fetchCameraByIdAction.rejected, (state) => {
      state.status = RequestStatus.Failed;
    }),
  name: 'camera',
  initialState,
  reducers: {},
});

const cameraActions = cameraSlice.actions;

export { cameraActions, cameraSlice };
