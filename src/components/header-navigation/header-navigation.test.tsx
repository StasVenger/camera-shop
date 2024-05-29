import { render, screen } from '@testing-library/react';
import HeaderNavigation from './header-navigation';
import { withHistory } from '@utils/mock-component';

describe('Component: Header navigation', () => {
  it('should render the component', () => {
    const headerNavigationTestId = 'header-navigation';

    render(withHistory(<HeaderNavigation />));

    expect(screen.getByTestId(headerNavigationTestId)).toBeInTheDocument();
  });
});
