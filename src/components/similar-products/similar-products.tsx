import RatingStars from '@components/rating-stars/rating-stars';
import { AppRoute } from '@constants';
import { CameraInfo } from '@type/camera-info';
import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type TSimilarProductProps = {
  products: CameraInfo[];
}

function SimilarProducts({ products }: TSimilarProductProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    if (currentIndex + 3 < products.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div className="page-content__section">
      <section className="product-similar">
        <div className="container">
          <h2 className="title title--h3">Похожие товары</h2>
          <div className="product-similar__slider">
            <div className="product-similar__slider-list">
              {products.map((product, index) => (
                <div
                  className={classNames('product-card', { 'is-active': index >= currentIndex && index < currentIndex + 3 })}
                  key={product.id}
                >
                  <div className="product-card__img">
                    <picture>
                      <source type="image/webp" srcSet={`/${product.previewImgWebp}, /${product.previewImgWebp2x}`} />
                      <img src={`/${product.previewImg}`} srcSet={`/${product.previewImg2x}`} width={280} height={240} alt={product.name} />
                    </picture>
                  </div>
                  <div className="product-card__info">
                    <div className="rate product-card__rate">
                      <RatingStars rating={product.rating} />
                      <p className="visually-hidden">Рейтинг: {product.rating}</p>
                      <p className="rate__count">
                        <span className="visually-hidden">Всего оценок:</span>{product.reviewCount}
                      </p>
                    </div>
                    <p className="product-card__title">{product.name}</p>
                    <p className="product-card__price">
                      <span className="visually-hidden">Цена:</span>{product.price.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                  <div className="product-card__buttons">
                    <button className="btn btn--purple product-card__btn" type="button">Купить</button>
                    <Link className="btn btn--transparent" to={`${AppRoute.Camera}/${product.id}`}>Подробнее</Link>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="slider-controls slider-controls--prev"
              type="button"
              aria-label="Предыдущий слайд"
              disabled={currentIndex === 0}
              onClick={handlePrevClick}
            >
              <svg width={7} height={12} aria-hidden="true">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
            <button
              className="slider-controls slider-controls--next"
              type="button"
              aria-label="Следующий слайд"
              disabled={currentIndex + 3 >= products.length}
              onClick={handleNextClick}
            >
              <svg width={7} height={12} aria-hidden="true">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SimilarProducts;
