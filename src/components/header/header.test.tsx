import { render, screen } from '@testing-library/react';
import Header from './header';
import { withHistory } from '@utils/mock-component';

describe('Component: Header', () => {
  it('should render the component', () => {
    const headerTestId = 'header';

    render(withHistory(<Header />));

    expect(screen.getByTestId(headerTestId)).toBeInTheDocument();
  });
});
