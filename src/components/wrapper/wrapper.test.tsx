import CatalogPage from '@pages/catalog-page/catalog-page';
import Wrapper from './wrapper';
import { render, screen } from '@testing-library/react';

describe('Component: Wrapper', () => {
  it('should render component', () => {
    const wrapperTestId = 'wrapper';

    render(<Wrapper><CatalogPage></CatalogPage></Wrapper>);

    expect(screen.getByTestId(wrapperTestId)).toBeInTheDocument();
  });
});
