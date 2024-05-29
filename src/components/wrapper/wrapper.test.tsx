import CatalogPage from '@pages/catalog-page/catalog-page';
import Wrapper from './wrapper';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '@utils/mock-component';
import { makeFakeStore } from '@utils/mocks';

describe('Component: Wrapper', () => {
  it('should render component', () => {
    const wrapperTestId = 'wrapper';
    const preparedComponent = withHistory(<Wrapper><CatalogPage></CatalogPage></Wrapper>);
    const { withStoreComponent } = withStore(preparedComponent, makeFakeStore());

    render(withStoreComponent);

    const wrappers = screen.getAllByTestId(wrapperTestId);
    expect(wrappers).toHaveLength(2);
  });
});
