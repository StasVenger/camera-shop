import { COMMENT_DATE_FORMAT, ISO_DATE_FORMAT } from '@constants';
import { Comment } from '@type/comments';
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
