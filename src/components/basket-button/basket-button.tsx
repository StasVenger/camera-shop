import { AppRoute } from '@constants';
import { useAppSelector } from '@hooks/index';
import { selectBasketCameras } from '@store/slices/basket-data/selectors';
import { Link } from 'react-router-dom';

function BasketButton(): JSX.Element {
  const basketCameras = useAppSelector(selectBasketCameras);
  return (
    <Link className="header__basket-link" to={AppRoute.Basket}>
      <svg width={16} height={16} aria-hidden="true">
        <use xlinkHref="#icon-basket" />
      </svg>
      {basketCameras.length > 0 && <span className="header__basket-count">{basketCameras.length}</span>}
    </Link>
  );
}

export default BasketButton;
