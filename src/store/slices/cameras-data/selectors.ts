import { State } from '@type/state';

export const selectCameras = (state: State) => state.cameras.cameras;
export const selectCamerasStatus = (state: State) => state.cameras.status;
