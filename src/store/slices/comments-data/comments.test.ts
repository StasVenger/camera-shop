import { RequestStatus } from '@constants';
import { commentsSlice } from './comments';
import { makeFakeComment } from '@utils/mocks';
import { fetchCommentsAction } from '@store/thunks/comments';

describe('Comments slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { comments: [], status: RequestStatus.Idle };

    const result = commentsSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { comments: [], status: RequestStatus.Idle };

    const result = commentsSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "Loading" with "fetchCommentsAction.pending" action', () => {
    const initialState = { comments: [], status: RequestStatus.Idle };
    const expectedState = { comments: [], status: RequestStatus.Loading };

    const result = commentsSlice.reducer(initialState, fetchCommentsAction.pending('cameraId', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "Success" with "fetchCommentsAction.fulfilled" action', () => {
    const comments = [makeFakeComment()];
    const initialState = { comments: [], status: RequestStatus.Loading };
    const expectedState = { comments, status: RequestStatus.Success };

    const result = commentsSlice.reducer(initialState, fetchCommentsAction.fulfilled(comments, 'cameraId', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "Failed" with "fetchCommentsAction.rejected" action', () => {
    const initialState = { comments: [], status: RequestStatus.Loading };
    const expectedState = { comments: [], status: RequestStatus.Failed };

    const result = commentsSlice.reducer(initialState, fetchCommentsAction.rejected(null, 'cameraId', ''));

    expect(result).toEqual(expectedState);
  });
});
