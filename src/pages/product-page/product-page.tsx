import HelmetComponent from '@components/helmet-component/helmet-component';
import Loader from '@components/loader/loader';
import RatingStars from '@components/rating-stars/rating-stars';
import Wrapper from '@components/wrapper/wrapper';
import { AppRoute, RequestStatus } from '@constants';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import NotFoundPage from '@pages/not-found-page/not-found-page';
import { selectCameraInfo, selectCameraStatus } from '@store/slices/camera-data/selectors';
import { fetchCameraByIdAction } from '@store/thunks/cameras';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductPage(): JSX.Element {
  const { cameraId } = useParams();
  const dispatch = useAppDispatch();
  const cameraInfo = useAppSelector(selectCameraInfo);
  const cameraRequestStatus = useAppSelector(selectCameraStatus);
  const [activeTab, setActiveTab] = useState('Характеристики');

  useEffect(() => {
    dispatch(fetchCameraByIdAction(cameraId as string));
  }, [cameraId, dispatch]);

  if (cameraRequestStatus === RequestStatus.Loading) {
    return <Loader />;
  }

  if (cameraRequestStatus === RequestStatus.Failed || !cameraInfo || !cameraId) {
    return <NotFoundPage />;
  }

  return (
    <Wrapper>
      <HelmetComponent title='Продукт - Фотошоп' />
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
                <span className="breadcrumbs__link breadcrumbs__link--active">{cameraInfo.name}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="page-content__section">
          <section className="product">
            <div className="container">
              <div className="product__img">
                <picture>
                  <source type="image/webp" srcSet={`/${cameraInfo.previewImgWebp}, /${cameraInfo.previewImgWebp2x}`} />
                  <img src={`/${cameraInfo.previewImg}`} srcSet={`/${cameraInfo.previewImg2x}`} width={560} height={480} alt={cameraInfo.name} />
                </picture>
              </div>
              <div className="product__content">
                <h1 className="title title--h3">{cameraInfo.name}</h1>
                <div className="rate product__rate">
                  <RatingStars rating={cameraInfo.rating} />
                  <p className="visually-hidden">Рейтинг: {cameraInfo.rating}</p>
                  <p className="rate__count">
                    <span className="visually-hidden">Всего оценок:</span>{cameraInfo.reviewCount}
                  </p>
                </div>
                <p className="product__price">
                  <span className="visually-hidden">Цена:</span>{cameraInfo.price.toLocaleString('ru-RU')} ₽
                </p>
                <button className="btn btn--purple" type="button">
                  <svg width={24} height={16} aria-hidden="true">
                    <use xlinkHref="#icon-add-basket" />
                  </svg>Добавить в корзину
                </button>
                <div className="tabs product__tabs">
                  <div className="tabs__controls product__tabs-controls">
                    <button
                      className={classNames('tabs__control', { 'is-active': activeTab === 'Характеристики' })}
                      type="button"
                      onClick={() => setActiveTab('Характеристики')}
                    >
                      Характеристики
                    </button>
                    <button
                      className={classNames('tabs__control', { 'is-active': activeTab === 'Описание' })}
                      type="button"
                      onClick={() => setActiveTab('Описание')}
                    >
                      Описание
                    </button>
                  </div>
                  <div className="tabs__content">
                    <div className={classNames('tabs__element', { 'is-active': activeTab === 'Характеристики' })}>
                      <ul className="product__tabs-list">
                        <li className="item-list">
                          <span className="item-list__title">Артикул:</span>
                          <p className="item-list__text"> {cameraInfo.vendorCode}</p>
                        </li>
                        <li className="item-list">
                          <span className="item-list__title">Категория:</span>
                          <p className="item-list__text">{cameraInfo.category}</p>
                        </li>
                        <li className="item-list">
                          <span className="item-list__title">Тип камеры:</span>
                          <p className="item-list__text">{cameraInfo.type}</p>
                        </li>
                        <li className="item-list">
                          <span className="item-list__title">Уровень:</span>
                          <p className="item-list__text">{cameraInfo.level}</p>
                        </li>
                      </ul>
                    </div>
                    <div className={classNames('tabs__element', { 'is-active': activeTab === 'Описание' })}>
                      <div className="product__tabs-text">
                        <p>{cameraInfo.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="page-content__section">
          <section className="review-block">
            <div className="container">
              <div className="page-content__headed">
                <h2 className="title title--h3">Отзывы</h2>
              </div>
              <ul className="review-block__list">
                <li className="review-card">
                  <div className="review-card__head">
                    <p className="title title--h4">Сергей Горский</p>
                    <time className="review-card__data" dateTime="2022-04-13">13 апреля</time>
                  </div>
                  <div className="rate review-card__rate">
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <p className="visually-hidden">Оценка: 5</p>
                  </div>
                  <ul className="review-card__list">
                    <li className="item-list">
                      <span className="item-list__title">Достоинства:</span>
                      <p className="item-list__text">Надёжная, хорошо лежит в руке, необычно выглядит</p>
                    </li>
                    <li className="item-list">
                      <span className="item-list__title">Недостатки:</span>
                      <p className="item-list__text">Тяжеловата, сложно найти плёнку</p>
                    </li>
                    <li className="item-list">
                      <span className="item-list__title">Комментарий:</span>
                      <p className="item-list__text">Раз в полгода достаю из-под стекла, стираю пыль, заряжаю — работает как часы. Ни у кого из знакомых такой нет, все завидуют) Теперь это жемчужина моей коллекции, однозначно стоит своих денег!</p>
                    </li>
                  </ul>
                </li>
                <li className="review-card">
                  <div className="review-card__head">
                    <p className="title title--h4">Пётр Матросов</p>
                    <time className="review-card__data" dateTime="2022-03-02">2 марта</time>
                  </div>
                  <div className="rate review-card__rate">
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <p className="visually-hidden">Оценка: 1</p>
                  </div>
                  <ul className="review-card__list">
                    <li className="item-list">
                      <span className="item-list__title">Достоинства:</span>
                      <p className="item-list__text">Хорошее пресс-папье</p>
                    </li>
                    <li className="item-list">
                      <span className="item-list__title">Недостатки:</span>
                      <p className="item-list__text">Через 3 дня развалилась на куски</p>
                    </li>
                    <li className="item-list">
                      <span className="item-list__title">Комментарий:</span>
                      <p className="item-list__text">При попытке вставить плёнку сломался механизм открытия отсека, пришлось заклеить его изолентой. Начал настраивать фокус&nbsp;— линза провалилась внутрь корпуса. Пока доставал — отломилось несколько лепестков диафрагмы. От злости стукнул камеру об стол, и рукоятка треснула пополам. Склеил всё суперклеем, теперь прижимаю ей бумагу. НЕ РЕКОМЕНДУЮ!!!</p>
                    </li>
                  </ul>
                </li>
                <li className="review-card">
                  <div className="review-card__head">
                    <p className="title title--h4">Татьяна Кузнецова </p>
                    <time className="review-card__data" dateTime="2021-12-30">30 декабря</time>
                  </div>
                  <div className="rate review-card__rate">
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <p className="visually-hidden">Оценка: 4</p>
                  </div>
                  <ul className="review-card__list">
                    <li className="item-list"><span className="item-list__title">Достоинства:</span>
                      <p className="item-list__text">Редкая</p>
                    </li>
                    <li className="item-list"><span className="item-list__title">Недостатки:</span>
                      <p className="item-list__text">Высокая цена</p>
                    </li>
                    <li className="item-list"><span className="item-list__title">Комментарий:</span>
                      <p className="item-list__text">Дорого для портативной видеокамеры, но в моей коллекции как раз не хватало такого экземпляра. Следов использования нет, доставили в заводской упаковке, выглядит шикарно!</p>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="review-block__buttons">
                <button className="btn btn--purple" type="button">
                  Показать больше отзывов
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

    </Wrapper>
  );
}

export default ProductPage;
