import { RequestStatus } from '@constants';
import { createSlice } from '@reduxjs/toolkit';
import { fetchCommentsAction } from '@store/thunks/comments';
import { Comment } from '@type/comments';

type CommentsState = {
  comments: Comment[];
  status: RequestStatus;
}

const initialState: CommentsState = {
  comments: [],
  status: RequestStatus.Idle,
};

const commentsSlice = createSlice({
  extraReducers: (builder) => builder
    .addCase(fetchCommentsAction.pending, (state) => {
      state.status = RequestStatus.Loading;
    })
    .addCase(fetchCommentsAction.fulfilled, (state, action) => {
      state.status = RequestStatus.Success;
      state.comments = action.payload;
    })
    .addCase(fetchCommentsAction.rejected, (state) => {
      state.status = RequestStatus.Failed;
    }),
  name: 'comments',
  initialState,
  reducers: {},
});

const commentsActions = commentsSlice.actions;

export { commentsActions, commentsSlice };
