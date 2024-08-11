import { useAppDispatch } from '@hooks/index';
import { basketActions } from '@store/slices/basket-data/basket';
import { Basket } from '@type/basket';
import { useState } from 'react';

type TBasketCardProps = {
  camera: Basket;
  onDeleteClick: (camera: Basket) => void;
}

function BasketCard({ camera, onDeleteClick }: TBasketCardProps): JSX.Element {
  const [totalPrice, setTotalPrice] = useState(camera.totalPrice);
  const [count, setCount] = useState(camera.count);
  const dispatch = useAppDispatch();

  const handleIncreaseCount = () => {
    if (count < 9) {
      const newCount = count + 1;
      const newTotalPrice = totalPrice + camera.price;
      setCount(newCount);
      setTotalPrice(newTotalPrice);
      dispatch(basketActions.updateItemCount({ id: Number(camera.id), count: newCount, totalPrice: newTotalPrice }));
    }
  };

  const handleDecreaseCount = () => {
    if (count > 1) {
      const newCount = count - 1;
      const newTotalPrice = totalPrice - camera.price;
      setCount(newCount);
      setTotalPrice(newTotalPrice);
      dispatch(basketActions.updateItemCount({ id: Number(camera.id), count: newCount, totalPrice: newTotalPrice }));
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 1 && value <= 9) {
      const newTotalPrice = value * camera.price;
      setCount(value);
      setTotalPrice(newTotalPrice);
      dispatch(basketActions.updateItemCount({ id: Number(camera.id), count: value, totalPrice: newTotalPrice }));
    }
  };

  return (
    <li className="basket-item">
      <div className="basket-item__img">
        <picture>
          <source type="image/webp" srcSet={`${camera.previewImgWebp}, ${camera.previewImgWebp2x}`} />
          <img src={camera.previewImg} srcSet={camera.previewImg2x} width={280} height={240} alt={camera.name} />
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{camera.name}</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item">
            <span className="basket-item__article">Артикул: </span>
            <span className="basket-item__number">{camera.vendorCode}</span>
          </li>
          <li className="basket-item__list-item">{`${camera.type} ${camera.category.toLowerCase()}`}</li>
          <li className="basket-item__list-item">{camera.level} уровень</li>
        </ul>
      </div>
      <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{camera.price.toLocaleString('ru-RU')} ₽</p>
      <div className="quantity">
        <button
          className="btn-icon btn-icon--prev"
          aria-label="уменьшить количество товара"
          onClick={handleDecreaseCount}
        >
          <svg width={7} height={12} aria-hidden="true">
            <use xlinkHref="#icon-arrow" />
          </svg>
        </button>
        <label className="visually-hidden" htmlFor="counter1" />
        <input
          type="number"
          id="counter1"
          value={camera.count}
          min={1}
          max={9}
          aria-label="количество товара"
          onChange={handleInputChange}
        />
        <button
          className="btn-icon btn-icon--next"
          aria-label="увеличить количество товара"
          onClick={handleIncreaseCount}
        >
          <svg width={7} height={12} aria-hidden="true">
            <use xlinkHref="#icon-arrow" />
          </svg>
        </button>
      </div>
      <div className="basket-item__total-price"><span className="visually-hidden">Общая цена:</span>{camera.totalPrice.toLocaleString('ru-RU')} ₽</div>
      <button
        className="cross-btn"
        type="button"
        aria-label="Удалить товар"
        onClick={() => onDeleteClick(camera)}
      >
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close" />
        </svg>
      </button>
    </li>
  );
}

export default BasketCard;
