import { AppRoute } from '@constants';
import classNames from 'classnames';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type TAddItemSuccessModalProps = {
  isActive: boolean;
  onCloseClick: () => void;
}

function AddItemSuccessModal({ isActive, onCloseClick }: TAddItemSuccessModalProps): JSX.Element {
  const navigate = useNavigate();
  useEffect(() => {
    if (isActive) {
      document.body.classList.add('scroll-lock');
    } else {
      document.body.classList.remove('scroll-lock');
    }
  });

  const handleGoToBasketClick = () => {
    navigate(AppRoute.Basket);
    document.body.classList.remove('scroll-lock');
  };

  const handleContinueShoppingClick = () => {
    onCloseClick();
  };

  return (
    <div className={classNames('modal modal--narrow', { 'is-active': isActive })}>
      <div className="modal__wrapper">
        <div className="modal__overlay" />
        <div className="modal__content">
          <p className="title title--h4">Товар успешно добавлен в корзину</p>
          <svg className="modal__icon" width={86} height={80} aria-hidden="true">
            <use xlinkHref="#icon-success" />
          </svg>
          <div className="modal__buttons">
            <Link
              className="btn btn--transparent modal__btn"
              to={AppRoute.Root}
              onClick={handleContinueShoppingClick}
            >
              Продолжить покупки
            </Link>
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              onClick={handleGoToBasketClick}
            >
              Перейти в корзину
            </button>
          </div>
          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={onCloseClick}
          >
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
          </button>
        </div>
      </div>
    </div>

  );
}

export default AddItemSuccessModal;
