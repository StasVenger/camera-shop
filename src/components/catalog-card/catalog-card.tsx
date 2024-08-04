import RatingStars from '@components/rating-stars/rating-stars';
import { AppRoute } from '@constants';
import { useAppSelector } from '@hooks/index';
import { selectBasketCameras } from '@store/slices/basket-data/selectors';
import { CameraInfo } from '@type/camera-info';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type TCatalogCardProps = {
  camera: CameraInfo;
  onBuyClick: () => void;
}

function CatalogCard({ camera, onBuyClick }: TCatalogCardProps): JSX.Element {
  const basketCameras = useAppSelector(selectBasketCameras);
  const [isInCart, setIsInCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isCameraInCart = basketCameras.some((basketCamera) => basketCamera.id === camera.id);
    setIsInCart(isCameraInCart);
  }, [basketCameras, camera.id]);

  const handleGoToCartClick = () => {
    navigate(AppRoute.Basket);
  };

  return (
    <div className="product-card" data-testid="catalog-card">
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`${camera.previewImgWebp}, ${camera.previewImgWebp2x}`} />
          <img src={camera.previewImg} srcSet={camera.previewImg2x} width={280} height={240} alt={camera.name} />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <RatingStars rating={camera.rating} />
          <p className="visually-hidden">Рейтинг: {camera.rating}</p>
          <p className="rate__count">
            <span className="visually-hidden">Всего оценок:</span>{camera.reviewCount}
          </p>
        </div>
        <p className="product-card__title">{camera.name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{camera.price.toLocaleString('ru-RU')} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        {isInCart ? (
          <button
            className="btn btn--purple-border"
            type="button"
            onClick={handleGoToCartClick}
          >
            <svg width="16" height="16" aria-hidden="true">
              <use xlinkHref="#icon-basket" />
            </svg>
            В корзине
          </button>
        ) : (
          <button
            className="btn btn--purple product-card__btn"
            type="button"
            onClick={onBuyClick}
          >
            Купить
          </button>
        )}
        <Link className="btn btn--transparent" to={`${AppRoute.Camera}/${camera.id}`}>Подробнее</Link>
      </div>
    </div>
  );
}

export default CatalogCard;
