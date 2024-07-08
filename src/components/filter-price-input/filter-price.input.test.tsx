import { render, screen } from '@testing-library/react';
import FilterPriceInput from './filter-price-input';

describe('Component: FilterPrice', () => {
  it('should render the component', () => {
    const priceInputTestId = 'price-input';

    render(<FilterPriceInput name="" value="" placeholder="" onChange={() => priceInputTestId} onBlur={() => priceInputTestId}/>);

    expect(screen.getByTestId(priceInputTestId)).toBeInTheDocument();
  });
});
