import { render, screen } from '@testing-library/react';
import CommentsList from './comments-list';
import { makeFakeComment } from '@utils/mocks';

describe('Component: Comments list', () => {
  it('should render the component', () => {
    const comment = makeFakeComment();
    const commentsListTestId = 'comments-list';

    render(<CommentsList comments={[comment]}/>);

    expect(screen.getByTestId(commentsListTestId)).toBeInTheDocument();
  });
});
