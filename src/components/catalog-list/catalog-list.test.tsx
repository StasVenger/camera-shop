import { render, screen } from '@testing-library/react';
import CatalogList from './catalog-list';
import { makeFakeCamera } from '@utils/mocks';

describe('Component: Catalog list', () => {
  it('should render the component', () => {
    const camera = makeFakeCamera();
    const catalogCardsTestId = 'catalog-list';

    render(<CatalogList cameras={[camera]} onBuyClick={() => catalogCardsTestId} />);

    expect(screen.getByTestId(catalogCardsTestId)).toBeInTheDocument();
  });
});
