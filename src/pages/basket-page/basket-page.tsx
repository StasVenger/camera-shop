import BasketCardList from '@components/basket-card-list/basket-card-list';
import BasketRemoveModal from '@components/basket-remove-modal/basket-remove-modal';
import HelmetComponent from '@components/helmet-component/helmet-component';
import Wrapper from '@components/wrapper/wrapper';
import { AppRoute } from '@constants';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { basketActions } from '@store/slices/basket-data/basket';
import { selectBasketCameras } from '@store/slices/basket-data/selectors';
import { CameraInfo } from '@type/camera-info';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BasketPage(): JSX.Element {
  const basketCameras = useAppSelector(selectBasketCameras);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState<CameraInfo | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (basketCameras.length === 0) {
      navigate(AppRoute.Root);
    }
  });

  const handleDeleteClick = (camera: CameraInfo) => {
    setSelectedCamera(camera);
    setPopupVisible(true);
  };

  const handleConfirmDeleteClick = (id: number) => {
    dispatch(basketActions.removeItemFromBasket(id));
    setPopupVisible(false);
  };

  const handleCloseClick = () => {
    setPopupVisible(false);
  };

  return (
    <Wrapper>
      <HelmetComponent title="Корзина - Фотошоп" />
      <div className="page-content">
        <div className="breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={AppRoute.Root}>Главная
                  <svg width={5} height={8} aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini" />
                  </svg>
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={AppRoute.Root}>Каталог
                  <svg width={5} height={8} aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini" />
                  </svg>
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link breadcrumbs__link--active">Корзина</span>
              </li>
            </ul>
          </div>
        </div>
        <section className="basket">
          <div className="container">
            <h1 className="title title--h2">Корзина</h1>
            <BasketCardList cameras={basketCameras} onDeleteClick={handleDeleteClick}/>
            <div className="basket__summary">
              <div className="basket__promo">
                <p className="title title--h4">Если у вас есть промокод на скидку, примените его в этом поле</p>
                <div className="basket-form">
                  <form action="#">
                    <div className="custom-input">
                      <label><span className="custom-input__label">Промокод</span>
                        <input type="text" name="promo" placeholder="Введите промокод" />
                      </label>
                      <p className="custom-input__error">Промокод неверный</p>
                      <p className="custom-input__success">Промокод принят!</p>
                    </div>
                    <button className="btn" type="submit">Применить
                    </button>
                  </form>
                </div>
              </div>
              <div className="basket__summary-order">
                <p className="basket__summary-item">
                  <span className="basket__summary-text">Всего:</span>
                  <span className="basket__summary-value">111 390 ₽</span>
                </p>
                <p className="basket__summary-item">
                  <span className="basket__summary-text">Скидка:</span>
                  <span className="basket__summary-value basket__summary-value--bonus">0 ₽</span>
                </p>
                <p className="basket__summary-item">
                  <span className="basket__summary-text basket__summary-text--total">К оплате:</span>
                  <span className="basket__summary-value basket__summary-value--total">111 390 ₽</span>
                </p>
                <button className="btn btn--purple" type="submit">Оформить заказ</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <BasketRemoveModal
        camera={selectedCamera as CameraInfo}
        isActive={isPopupVisible}
        onCloseClick={handleCloseClick}
        onDeleteClick={handleConfirmDeleteClick}
      />
    </Wrapper>
  );
}

export default BasketPage;
