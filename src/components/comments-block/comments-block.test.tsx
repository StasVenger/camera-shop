import { render, screen } from '@testing-library/react';
import CommentsBlock from './comments-block';
import { makeFakeComment } from '@utils/mocks';

describe('Component: Comments block', () => {
  it('should render the component', () => {
    const comment = makeFakeComment();
    const commentsBlockTestId = 'comments-block';

    render(<CommentsBlock comments={[comment]}/>);

    expect(screen.getByTestId(commentsBlockTestId)).toBeInTheDocument();
  });
});
