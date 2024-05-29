import { render, screen } from '@testing-library/react';
import CatalogCard from './catalog-card';
import { makeFakeCamera } from '@utils/mocks';

describe('Component: Catalog card', () => {
  it('should render the component', () => {
    const camera = makeFakeCamera();
    const catalogCardTestId = 'catalog-card';

    render(<CatalogCard camera={camera} onBuyClick={() => catalogCardTestId} />);

    expect(screen.getByTestId(catalogCardTestId)).toBeInTheDocument();
  });
});
