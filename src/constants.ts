export const BACKEND_URL = 'https://camera-shop.accelerator.htmlacademy.pro';
export const REQUEST_TIMEOUT = 5000;

export enum AppRoute {
  Root = '/',
  Camera = '/camera'
}

export enum ApiRoute {
  Cameras = '/cameras',
}

export enum RequestStatus { Idle, Loading, Success, Failed }
