import { CameraInfo } from '@type/camera-info';

type TCatalogCardProps = {
  camera: CameraInfo;
}

function CatalogCard({ camera }: TCatalogCardProps): JSX.Element {
  const stars = Array.from({ length: 5 }, (_, index) => ({ id: `star-${index}` }));

  return (
    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`${camera.previewImgWebp}, ${camera.previewImgWebp2x}`} />
          <img src={camera.previewImg} srcSet={camera.previewImg2x} width={280} height={240} alt={camera.name} />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          {stars.map((star) => (
            <svg key={star.id} width={17} height={16} aria-hidden="true">
              <use xlinkHref={camera.rating > stars.indexOf(star) ? '#icon-full-star' : '#icon-star'} />
            </svg>))}
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
        <button className="btn btn--purple product-card__btn" type="button">Купить
        </button>
        <a className="btn btn--transparent" href="#">Подробнее
        </a>
      </div>
    </div>
  );
}

export default CatalogCard;
