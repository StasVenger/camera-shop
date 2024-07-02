import { COMMENT_DATE_FORMAT, ISO_DATE_FORMAT } from '@constants';
import { CameraInfo } from '@type/camera-info';
import { Comment } from '@type/comments';
import { CameraType, Filters, Level } from '@type/filters';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

export function humanizeDate(date: string) {
  return date ? dayjs(date).locale('ru').format(COMMENT_DATE_FORMAT) : '';
}

export function formatDateToISO(date: string): string {
  return date ? dayjs(date).format(ISO_DATE_FORMAT) : '';
}

export function sortCommentsByDate(comments: Comment[]): Comment[] {
  return [...comments].sort((a, b) => dayjs(b.createAt).diff(a.createAt));
}

export function filterCameras(cameras: CameraInfo[], filters: Filters): CameraInfo[] {
  return cameras.filter((camera) => {
    if (filters.priceFrom && camera.price < Number(filters.priceFrom)) {
      return false;
    }
    if (filters.priceTo && camera.price > Number(filters.priceTo)) {
      return false;
    }

    if (filters.category && camera.category !== filters.category) {
      return false;
    }

    if (Object.values(filters.types).some((type) => type) && !filters.types[camera.type as CameraType]) {
      return false;
    }

    if (Object.values(filters.levels).some((level) => level) && !filters.levels[camera.level as Level]) {
      return false;
    }

    return true;
  });
}

export function sortCameras(cameras: CameraInfo[], sortType: string, sortDirection: string): CameraInfo[] {
  const sortedCameras = [...cameras];
  if (sortType === 'price') {
    sortedCameras.sort((a, b) => sortDirection === 'asc' ? a.price - b.price : b.price - a.price);
  } else if (sortType === 'popularity') {
    sortedCameras.sort((a, b) => sortDirection === 'asc' ? a.rating - b.rating : b.rating - a.rating);
  }

  return sortedCameras;
}
