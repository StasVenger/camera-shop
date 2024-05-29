import { RequestStatus } from '@constants';
import { camerasSlice } from './cameras';
import { fetchCamerasAction } from '@store/thunks/cameras';
import { makeFakeCamera } from '@utils/mocks';

describe('Cameras slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { cameras: [], status: RequestStatus.Idle };

    const result = camerasSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { cameras: [], status: RequestStatus.Idle };

    const result = camerasSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "Loading" with "fetchCamerasAction.pending" action', () => {
    const initialState = { cameras: [], status: RequestStatus.Idle };
    const expectedState = { cameras: [], status: RequestStatus.Loading };

    const result = camerasSlice.reducer(initialState, fetchCamerasAction.pending('', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "Success" with "fetchCamerasAction.fulfilled" action', () => {
    const cameras = [makeFakeCamera()];
    const initialState = { cameras: [], status: RequestStatus.Loading };
    const expectedState = { cameras, status: RequestStatus.Success };

    const result = camerasSlice.reducer(initialState, fetchCamerasAction.fulfilled(cameras, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "Failed" with "fetchCamerasAction.rejected" action', () => {
    const initialState = { cameras: [], status: RequestStatus.Loading };
    const expectedState = { cameras: [], status: RequestStatus.Failed };

    const result = camerasSlice.reducer(initialState, fetchCamerasAction.rejected(null, '', undefined));

    expect(result).toEqual(expectedState);
  });
});
