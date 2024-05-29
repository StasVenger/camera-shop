import { RequestStatus } from '@constants';
import { cameraSlice } from './camera';
import { fetchCameraByIdAction } from '@store/thunks/cameras';
import { makeFakeCamera } from '@utils/mocks';

describe('Camera slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: ''};
    const expectedState = { camera: null, status: RequestStatus.Idle };

    const result = cameraSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: ''};
    const expectedState = { camera: null, status: RequestStatus.Idle };

    const result = cameraSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "Loading" with "fetchCameraByIdAction.pending" action', () => {
    const initialState = { camera: null, status: RequestStatus.Idle };
    const expectedState = { camera: null, status: RequestStatus.Loading };

    const result = cameraSlice.reducer(initialState, fetchCameraByIdAction.pending('cameraId', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "Success" with "fetchCameraByIdAction.fulfilled" action', () => {
    const camera = makeFakeCamera();
    const initialState = { camera: null, status: RequestStatus.Loading };
    const expectedState = { camera, status: RequestStatus.Success };

    const result = cameraSlice.reducer(initialState, fetchCameraByIdAction.fulfilled(camera, 'cameraId', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "Failed" with "fetchCameraByIdAction.rejected" action', () => {
    const initialState = { camera: null, status: RequestStatus.Loading };
    const expectedState = { camera: null, status: RequestStatus.Failed };

    const result = cameraSlice.reducer(initialState, fetchCameraByIdAction.rejected(null, 'cameraId', ''));

    expect(result).toEqual(expectedState);
  });
});
