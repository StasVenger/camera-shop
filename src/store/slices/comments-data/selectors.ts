import { State } from '@type/state';

export const selectComments = (state: State) => state.comments.comments;
export const selectCommentsStatus = (state: State) => state.comments.status;
