import { lorem, name } from 'faker';
import { CameraInfo } from '@type/camera-info';
import { Comment } from '@type/comments';

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
