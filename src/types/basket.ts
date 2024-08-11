import { CameraInfo } from './camera-info';

export type Basket = {
  count: number;
  totalPrice: number;
} & CameraInfo;
