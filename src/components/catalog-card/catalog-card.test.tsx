import { render, screen } from '@testing-library/react';
import CatalogCard from './catalog-card';
import { makeFakeCamera, makeFakeStore } from '@utils/mocks';
import { withHistory, withStore } from '@utils/mock-component';

describe('Component: Catalog card', () => {
  it('should render the component', () => {
    const camera = makeFakeCamera();
    const catalogCardTestId = 'catalog-card';
    const preparedComponent = withHistory(<CatalogCard camera={camera} onBuyClick={() => catalogCardTestId} />);
    const { withStoreComponent } = withStore(preparedComponent, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByTestId(catalogCardTestId)).toBeInTheDocument();
  });
});
