import { AppRoute, INITIAL_FILTERS } from '@constants';
import { useAppSelector } from '@hooks/index';
import { selectCameras } from '@store/slices/cameras-data/selectors';
import { selectPromoCameras } from '@store/slices/promo-data/selectors';
import { CameraInfo } from '@type/camera-info';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Filters } from '@type/filters';
import { filterCameras, sortCameras } from '@utils/common';
import CatalogCallModal from '@components/catalog-call-modal/catalog-call-modal';
import CatalogList from '@components/catalog-list/catalog-list';
import HelmetComponent from '@components/helmet-component/helmet-component';
import Wrapper from '@components/wrapper/wrapper';
import CatalogFilter from '@components/catalog-filter/catalog-filter';
import CatalogSort from '@components/catalog-sort/catalog-sort';
import CatalogPagination from '@components/catalog-pagination/catalog-pagination';
import 'swiper/css';
import 'swiper/css/pagination';
import './catalog-page.css';

function CatalogPage(): JSX.Element {
  const cameras = useAppSelector(selectCameras);
  const promoCameras = useAppSelector(selectPromoCameras);
  const [selectedCamera, setSelectedCamera] = useState<CameraInfo | null>(null);
  const [isCallModalActive, setIsCallModalActive] = useState(false);
  const [sortType, setSortType] = useState('price');
  const [sortDirection, setSortDirection] = useState('asc');
  const [sortedCameras, setSortedCameras] = useState<CameraInfo[]>([]);
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS);

  useEffect(() => {
    const filteredCameras = filterCameras(cameras, filters);
    let minPrice = 0;
    let maxPrice = 0;

    if (filteredCameras.length > 0) {
      const prices = filteredCameras.map((camera) => camera.price);
      minPrice = Math.min(...prices);
      maxPrice = Math.max(...prices);
    }

    if (filters.minPrice !== minPrice || filters.maxPrice !== maxPrice) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        minPrice: minPrice,
        maxPrice: maxPrice,
      }));
    }
  }, [cameras, filters]);

  useEffect(() => {
    const filteredCameras = filterCameras(cameras, filters);
    const sortedAndFilteredCameras = sortCameras(filteredCameras, sortType, sortDirection);
    setSortedCameras(sortedAndFilteredCameras);
  }, [sortType, sortDirection, cameras, filters]);

  const handleBuyClick = (camera: CameraInfo) => {
    setSelectedCamera(camera);
    setIsCallModalActive(true);
  };

  const handleModalClose = () => {
    setIsCallModalActive(false);
  };

  const handleSortChange = (type: string, direction: string): void => {
    setSortType(type);
    setSortDirection(direction);
  };

  const handleFilterChange = (newFilter: Filters) => {
    setFilters(newFilter);
  };

  return (
    <Wrapper>
      <HelmetComponent title="Каталог - Фотошоп"/>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
      >
        {promoCameras.map((camera) => (
          <SwiperSlide key={camera.id}>
            <div className="banner">
              <picture>
                <source type="image/webp" srcSet={`${camera.previewImgWebp}, ${camera.previewImgWebp2x}`} />
                <img src={camera.previewImg} srcSet={`${camera.previewImg2x}`} width={1280} height={280} alt="баннер" />
              </picture>
              <p className="banner__info">
                <span className="banner__message">Новинка!</span>
                <span className="title title--h1">{camera.name}</span>
                <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
                <Link className="btn" to={`${AppRoute.Camera}/${camera.id}`}>Подробнее</Link>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
                <span className="breadcrumbs__link breadcrumbs__link--active">Каталог</span>
              </li>
            </ul>
          </div>
        </div>
        <section className="catalog">
          <div className="container">
            <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
            <div className="page-content__columns">
              <div className="catalog__aside">
                <CatalogFilter filters={filters} onFilterChange={handleFilterChange}/>
              </div>
              <div className="catalog__content">
                <CatalogSort sortType={sortType} sortDirection={sortDirection} onSortChange={handleSortChange} />
                <CatalogList cameras={sortedCameras} onBuyClick={handleBuyClick}/>
                <CatalogPagination />
              </div>
            </div>
          </div>
        </section>
      </div>
      <CatalogCallModal isActive={isCallModalActive} camera={selectedCamera as CameraInfo} onCloseClick={handleModalClose}/>
    </Wrapper>
  );
}

export default CatalogPage;
