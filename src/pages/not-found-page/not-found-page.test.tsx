import { render, screen } from '@testing-library/react';
import { withHistory } from '@utils/mock-component';
import NotFoundPage from './not-found-page';

describe('Not found page', () => {
  it('should render page', () => {
    const expectedHeaderText = '404 Not Found';
    const expectedLinkText = 'Вернуться на главную';

    render(withHistory(<NotFoundPage />));

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});
