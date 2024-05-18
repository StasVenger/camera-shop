import { AppRoute } from '@constants';
import CatalogPage from '@pages/catalog-page/catalog-page';
import NotFoundPage from '@pages/not-found-page/not-found-page';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './hooks';
import { fetchCamerasAction } from '@store/thunks/cameras';
import { useEffect } from 'react';
import ProductPage from '@pages/product-page/product-page';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCamerasAction());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<CatalogPage />}
      />
      <Route
        path={`${AppRoute.Camera}/:cameraId`}
        element={<ProductPage />}
      />
      <Route
        path='*'
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

export default App;
