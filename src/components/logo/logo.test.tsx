import { render, screen } from '@testing-library/react';
import Logo from './logo';
import { withHistory } from '@utils/mock-component';

describe('Component: Logo', () => {
  it('should render the component', () => {
    const logoLinkTestId = 'logo';

    render(withHistory(<Logo />));

    expect(screen.getByTestId(logoLinkTestId)).toBeInTheDocument();
  });
});
