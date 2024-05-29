import { render, screen } from '@testing-library/react';
import RatingStars from './rating-stars';

describe('Component: Rating stars', () => {
  it('should render the component', () => {
    const ratingStarsTestId = 'star-0';
    const rating = 3;

    render(<RatingStars rating={rating} />);

    expect(screen.getByTestId(ratingStarsTestId)).toBeInTheDocument();
  });
});
