export const BACKEND_URL = 'https://camera-shop.accelerator.htmlacademy.pro';
export const REQUEST_TIMEOUT = 5000;

export enum AppRoute {
  Root = '/',
  Camera = '/camera'
}

export enum ApiRoute {
  Cameras = '/cameras',
  Orders = '/orders',
  Promo = '/promo',
}

export const COMMENT_DATE_FORMAT = 'DD MMMM';
export const ISO_DATE_FORMAT = 'YYYY-MM-DD';

export enum RequestStatus { Idle, Loading, Success, Failed }
