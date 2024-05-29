import { render, screen } from '@testing-library/react';
import CommentItem from './comment-item';
import { makeFakeComment } from '@utils/mocks';

describe('Component: Comment item', () => {
  it('should render the component', () => {
    const comment = makeFakeComment();
    const commentItemTestId = 'comment-card';

    render(<CommentItem comment={comment}/>);

    expect(screen.getByTestId(commentItemTestId)).toBeInTheDocument();
  });
});
