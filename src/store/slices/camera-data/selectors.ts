import { State } from '@type/state';

export const selectCameraInfo = (state: State) => state.camera.camera;
export const selectCameraStatus = (state: State) => state.camera.status;
