import { render, screen } from '@testing-library/react';
import FilterRadioElement from './filter-radio-element';

describe('Component: FilterRadio', () => {
  it('should render the component', () => {
    const filterRadioTestId = 'filter-radio';

    render(<FilterRadioElement name="example" value="example" checked label="Test" onChange={() => filterRadioTestId}/>);

    expect(screen.getByTestId(filterRadioTestId)).toBeInTheDocument();
  });
});
