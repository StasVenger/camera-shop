import { render, screen } from '@testing-library/react';
import FilterCheckbox from './filter-checkbox';

describe('Component: FilterCheckbox', () => {
  it('should render the component', () => {
    const checkboxTestId = 'filter-checkbox';

    render(<FilterCheckbox name="" checked={false} label="" onChange={() => checkboxTestId} />);

    expect(screen.getByTestId(checkboxTestId)).toBeInTheDocument();
  });
});
