import { render, screen } from '@testing-library/react';
import Header from './header';
import { withHistory, withStore } from '@utils/mock-component';
import { makeFakeStore } from '@utils/mocks';

describe('Component: Header', () => {
  it('should render the component', () => {
    const headerTestId = 'header';

    const preparedComponent = withHistory(<Header />);
    const { withStoreComponent } = withStore(preparedComponent, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByTestId(headerTestId)).toBeInTheDocument();
  });
});
