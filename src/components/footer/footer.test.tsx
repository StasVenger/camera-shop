import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should render the component', () => {
    const footerTestId = 'footer';

    render(<Footer />);

    expect(screen.getByTestId(footerTestId)).toBeInTheDocument();
  });
});
