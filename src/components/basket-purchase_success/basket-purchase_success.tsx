import classNames from 'classnames';

type TBasketPurchaseSuccessProps = {
  isActive: boolean;
  onCloseClick: () => void;
  error: string | null;
}

function BasketPurchaseSuccess({ isActive, onCloseClick, error }: TBasketPurchaseSuccessProps): JSX.Element {
  return (
    <div className={classNames('modal modal--narrow', { 'is-active': isActive })}>
      <div className="modal__wrapper">
        <div className="modal__overlay" />
        <div className="modal__content">
          <p className="title title--h4">{error ? error : 'Спасибо за покупку'}</p>
          {!error &&
            <svg className="modal__icon" width={80} height={78} aria-hidden="true">
              <use xlinkHref="#icon-review-success" />
            </svg>}
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
              onClick={onCloseClick}
            >
              Вернуться к покупкам
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

export default BasketPurchaseSuccess;
