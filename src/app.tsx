import { AppRoute } from '@constants';
import CatalogPage from '@pages/catalog-page/catalog-page';
import NotFoundPage from '@pages/not-found-page/not-found-page';
import { Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<CatalogPage />}
      />
      <Route
        path='*'
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

export default App;
