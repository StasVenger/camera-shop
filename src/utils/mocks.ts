import { lorem, name } from 'faker';
import { CameraInfo } from '@type/camera-info';
import { Comment } from '@type/comments';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '@services/api';
import { State } from '@type/state';
import { RequestStatus } from '@constants';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const makeFakeCamera = (): CameraInfo => ({
  id: crypto.randomUUID(),
  name: name.title(),
  vendorCode: 'DA4IU67AD5',
  type: 'Коллекционная',
  category: 'Видеокамера',
  description: lorem.text(),
  level: 'Нулевой',
  price: Math.floor(Math.random() * 100) + 1,
  rating: Math.floor(Math.random() * 5) + 1,
  reviewCount:Math.floor(Math.random() * 100) + 1,
  previewImg: 'img/content/das-auge.jpg',
  previewImg2x: 'img/content/das-auge@2x.jpg',
  previewImgWebp: 'img/content/das-auge.webp',
  previewImgWebp2x: 'img/content/das-auge@2x.webp'
});

export const makeFakeComment = (): Comment => ({
  id: crypto.randomUUID(),
  createAt: new Date().toISOString(),
  cameraId: Math.floor(Math.random() * 100) + 1,
  userName: name.title(),
  advantage: lorem.text(),
  disadvantage: lorem.text(),
  review: lorem.text(),
  rating: Math.floor(Math.random() * 5) + 1,
});

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  cameras: { cameras: [], status: RequestStatus.Idle },
  camera: { camera: null, status: RequestStatus.Idle },
  comments: { comments: [], status: RequestStatus.Idle },
  ...initialState ?? {},
});
