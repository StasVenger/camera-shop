import { CameraInfo } from '@type/camera-info';
import classNames from 'classnames';

type TBasketRemoveModalProps = {
  camera: CameraInfo;
  isActive: boolean;
  onCloseClick: () => void;
  onDeleteClick: (id: number) => void;
};

function BasketRemoveModal({ camera, isActive, onCloseClick, onDeleteClick }: TBasketRemoveModalProps): JSX.Element {
  return (
    <div className={classNames('modal', { 'is-active': isActive })}>
      <div className="modal__wrapper">
        <div className="modal__overlay" />
        <div className="modal__content">
          <p className="title title--h4">Удалить этот товар?</p>
          <div className="basket-item basket-item--short">
            <div className="basket-item__img">
              <picture>
                <source type="image/webp" srcSet={`/${camera?.previewImgWebp}, /${camera?.previewImgWebp2x}`} />
                <img src={`/${camera?.previewImg}`} srcSet={`/${camera?.previewImg2x}`} width={140} height={120} alt={camera?.name} />
              </picture>
            </div>
            <div className="basket-item__description">
              <p className="basket-item__title">{camera?.name}</p>
              <ul className="basket-item__list">
                <li className="basket-item__list-item">
                  <span className="basket-item__article">Артикул:</span>
                  <span className="basket-item__number">{camera?.vendorCode}</span>
                </li>
                <li className="basket-item__list-item">{camera?.type} {camera?.category}</li>
                <li className="basket-item__list-item">{camera?.level} уровень</li>
              </ul>
            </div>
          </div>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--half-width"
              type="button"
              onClick={() => onDeleteClick(parseInt(camera?.id, 10))}
            >
              Удалить
            </button>
            <a className="btn btn--transparent modal__btn modal__btn--half-width" href="#">Продолжить покупки</a>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={onCloseClick}>
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketRemoveModal;
