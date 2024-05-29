import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Component: Header', () => {
  it('should render the component', () => {
    const headerTestId = 'header';

    render(<Header />);

    expect(screen.getByTestId(headerTestId)).toBeInTheDocument();
  });
});
