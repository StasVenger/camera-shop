import { AppRoute, RequestStatus } from '@constants';
import CatalogPage from '@pages/catalog-page/catalog-page';
import NotFoundPage from '@pages/not-found-page/not-found-page';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchCamerasAction } from '@store/thunks/cameras';
import { useEffect } from 'react';
import ProductPage from '@pages/product-page/product-page';
import { fetchPromoAction } from '@store/thunks/promo';
import { selectCamerasStatus } from '@store/slices/cameras-data/selectors';
import Loader from '@components/loader/loader';
import BasketPage from '@pages/basket-page/basket-page';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const camerasRequestStatus = useAppSelector(selectCamerasStatus);

  useEffect(() => {
    dispatch(fetchCamerasAction());
    dispatch(fetchPromoAction());
  }, [dispatch]);

  if (camerasRequestStatus === RequestStatus.Loading) {
    return <Loader />;
  }

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
        path={AppRoute.Basket}
        element={<BasketPage />}
      />
      <Route
        path='*'
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

export default App;
