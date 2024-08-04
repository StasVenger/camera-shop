import { CameraType, Filters, Level } from '@type/filters';

export const BACKEND_URL = 'https://camera-shop.accelerator.htmlacademy.pro';
export const REQUEST_TIMEOUT = 5000;

export enum AppRoute {
  Root = '/',
  Camera = '/camera',
  Basket = '/card',
}

export enum ApiRoute {
  Cameras = '/cameras',
  Orders = '/orders',
  Promo = '/promo',
}

export const COMMENT_DATE_FORMAT = 'DD MMMM';
export const ISO_DATE_FORMAT = 'YYYY-MM-DD';
export const VISIBLE_COMMENTS_COUNT = 3;

export const INITIAL_FILTERS: Filters = {
  priceFrom: '',
  priceTo: '',
  category: null,
  types: {
    [CameraType.Digital]: false,
    [CameraType.Film]: false,
    [CameraType.Snapshot]: false,
    [CameraType.Collection]: false,
  },
  levels: {
    [Level.Zero]: false,
    [Level.NonProfessional]: false,
    [Level.Professional]: false,
  },
  maxPrice: 0,
  minPrice: 0
};

export enum RequestStatus { Idle, Loading, Success, Failed }
