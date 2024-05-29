import { render, screen } from '@testing-library/react';
import HeaderNavigation from './header-navigation';

describe('Component: Header navigation', () => {
  it('should render the component', () => {
    const headerNavigationTestId = 'header-navigation';

    render(<HeaderNavigation />);

    expect(screen.getByTestId(headerNavigationTestId)).toBeInTheDocument();
  });
});
