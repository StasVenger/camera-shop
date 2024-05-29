import { render, screen } from '@testing-library/react';
import Logo from './logo';

describe('Component: Logo', () => {
  it('should render the component', () => {
    const logoLinkTestId = 'logo';

    render(<Logo />);

    expect(screen.getByTestId(logoLinkTestId)).toBeInTheDocument();
  });
});
