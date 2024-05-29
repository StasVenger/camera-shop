import { useAppDispatch } from '@hooks/index';
import { addOrder } from '@store/thunks/orders';
import { CameraInfo } from '@type/camera-info';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

type TCatalogCallModalProps = {
  camera: CameraInfo;
  isActive: boolean;
  onCloseClick: () => void;
}

type TPhoneInput = {
  phone: string | null;
}

function CatalogCallModal({ camera, isActive, onCloseClick }: TCatalogCallModalProps): JSX.Element {
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalElement = modalRef.current;
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const {register, handleSubmit, formState: { errors }, reset} = useForm<TPhoneInput>();
  const {ref, ...rest} = register('phone', {
    required: 'Поле обязательно для заполнения',
    pattern: {
      value: /^(\+7|8)?[\s-]?\(?9\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
      message: 'Номер телефона должен быть в формате +7(9XX)XXX-XX-XX',
    },
  });

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        if (firstInputRef.current !== null) {
          firstInputRef.current?.focus();
        } else if (closeButtonRef.current !== null) {
          closeButtonRef.current?.focus();
        }
      }, 100);
      document.body.classList.add('scroll-lock');

      const handleTabKeyDown = (evt: KeyboardEvent) => {
        if (evt.key === 'Tab') {
          if (evt.shiftKey && document.activeElement === firstInputRef.current) {
            evt.preventDefault();
            closeButtonRef.current?.focus();
          } else if (!evt.shiftKey && document.activeElement === closeButtonRef.current) {
            evt.preventDefault();
            firstInputRef.current?.focus();
          }
        }
      };

      const handleEscapeKeyDown = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape' || evt.key === 'Esc') {
          onCloseClick();
        }
      };

      modalElement?.addEventListener('keydown', handleTabKeyDown);
      modalElement?.addEventListener('keydown', handleEscapeKeyDown);

      return () => {
        modalElement?.removeEventListener('keydown', handleTabKeyDown);
        modalElement?.removeEventListener('keydown', handleEscapeKeyDown);
      };
    } else {
      document.body.classList.remove('scroll-lock');
    }
  }, [isActive, modalElement, onCloseClick, reset]);

  const onSubmit = ((data: TPhoneInput) => {
    const standardizedPhone = data.phone?.replace(/\D/g, '').slice(-10) ?? '';
    const payload = {
      camerasIds: [Number(camera.id)],
      tel: `+7${standardizedPhone}`,
    };
    dispatch(addOrder(payload));
    onCloseClick();
    reset({phone: ''});
  });

  return (
    <div ref={modalRef} className={classNames('modal', { 'is-active': isActive })} data-testid="call-modal">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={onCloseClick}/>
        <div className="modal__content">
          <p className="title title--h4">Свяжитесь со мной</p>
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
                <li className="basket-item__list-item">{camera?.type}</li>
                <li className="basket-item__list-item">{camera?.level}</li>
              </ul>
              <p className="basket-item__price">
                <span className="visually-hidden">Цена:</span>{camera?.price.toLocaleString('ru-RU')} ₽
              </p>
            </div>
          </div>
          <div className="custom-input form-review__item">
            <label>
              <span className="custom-input__label">Телефон
                <svg width={9} height={9} aria-hidden="true">
                  <use xlinkHref="#icon-snowflake" />
                </svg>
              </span>
              <input
                {...rest}
                ref={(e) => {
                  ref(e);
                  firstInputRef.current = e;
                }}
                type="tel"
                placeholder="Введите ваш номер"
              />
              {errors.phone && <span role="alert">{errors.phone.message}</span>}
            </label>
            <p className="custom-input__error">Нужно указать номер</p>
          </div>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
              onClick={(evt) => {
                evt.preventDefault();
                handleSubmit(onSubmit)(evt);
              }}
            >
              <svg width={24} height={16} aria-hidden="true">
                <use xlinkHref="#icon-add-basket" />
              </svg>Заказать
            </button>
          </div>
          <button
            ref={closeButtonRef}
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

export default CatalogCallModal;
