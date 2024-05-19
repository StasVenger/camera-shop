import CommentsBlock from '@components/comments-block/comments-block';
import HelmetComponent from '@components/helmet-component/helmet-component';
import Loader from '@components/loader/loader';
import RatingStars from '@components/rating-stars/rating-stars';
import Wrapper from '@components/wrapper/wrapper';
import { AppRoute, RequestStatus } from '@constants';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import NotFoundPage from '@pages/not-found-page/not-found-page';
import { selectCameraInfo, selectCameraStatus } from '@store/slices/camera-data/selectors';
import { selectComments } from '@store/slices/comments-data/selectors';
import { fetchCameraByIdAction } from '@store/thunks/cameras';
import { fetchCommentsAction } from '@store/thunks/comments';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductPage(): JSX.Element {
  const { cameraId } = useParams();
  const dispatch = useAppDispatch();
  const cameraInfo = useAppSelector(selectCameraInfo);
  const cameraRequestStatus = useAppSelector(selectCameraStatus);
  const comments = useAppSelector(selectComments);
  const [activeTab, setActiveTab] = useState('Характеристики');

  useEffect(() => {
    dispatch(fetchCameraByIdAction(cameraId as string));
    dispatch(fetchCommentsAction(cameraId as string));
  }, [cameraId, dispatch]);

  if (cameraRequestStatus === RequestStatus.Loading) {
    return <Loader />;
  }

  if (cameraRequestStatus === RequestStatus.Failed || !cameraInfo || !cameraId) {
    return <NotFoundPage />;
  }

  return (
    <Wrapper isProductPage>
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
          <CommentsBlock comments={comments}/>
        </div>
      </div>

    </Wrapper>
  );
}

export default ProductPage;
