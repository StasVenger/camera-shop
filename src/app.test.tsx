import { AppRoute } from '@constants';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '@utils/mock-component';
import { makeFakeStore } from '@utils/mocks';
import { MemoryHistory, createMemoryHistory } from 'history';
import App from './app';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "Catalog page" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(AppRoute.Root);

    render(withStoreComponent);

    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
  });
});
