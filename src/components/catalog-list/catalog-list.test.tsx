import { render, screen } from '@testing-library/react';
import CatalogList from './catalog-list';
import { makeFakeCamera, makeFakeStore } from '@utils/mocks';
import { withHistory, withStore } from '@utils/mock-component';

describe('Component: Catalog list', () => {
  it('should render the component', () => {
    const camera = makeFakeCamera();
    const catalogCardsTestId = 'catalog-list';

    const preparedComponent = withHistory(<CatalogList cameras={[camera]} onBuyClick={() => catalogCardsTestId} />);
    const { withStoreComponent } = withStore(preparedComponent, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByTestId(catalogCardsTestId)).toBeInTheDocument();
  });
});
