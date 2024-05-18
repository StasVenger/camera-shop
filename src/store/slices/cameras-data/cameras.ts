import { RequestStatus } from '@constants';
import { createSlice } from '@reduxjs/toolkit';
import { featchCamerasAction } from '@store/thunks/cameras';
import { CameraInfo } from '@type/camera-info';

type CamerasState = {
  cameras: CameraInfo[];
  status: RequestStatus;
}

const initialState: CamerasState = {
  cameras: [],
  status: RequestStatus.Idle,
};

const camerasSlice = createSlice({
  extraReducers: (builder) => builder
    .addCase(featchCamerasAction.pending, (state) => {
      state.status = RequestStatus.Loading;
    })
    .addCase(featchCamerasAction.fulfilled, (state, action) => {
      state.status = RequestStatus.Success;
      state.cameras = action.payload;
    })
    .addCase(featchCamerasAction.rejected, (state) => {
      state.status = RequestStatus.Failed;
    }),
  name: 'cameras',
  initialState,
  reducers: {},
});

const camerasActions = camerasSlice.actions;

export { camerasActions, camerasSlice };
