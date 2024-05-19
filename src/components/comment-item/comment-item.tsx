import RatingStars from '@components/rating-stars/rating-stars';
import { Comment } from '@type/comments';
import { formatDateToISO, humanizeDate } from '@utils/common';

type TCommentItemProps = {
  comment: Comment;
}

function CommentItem({ comment }: TCommentItemProps): JSX.Element {
  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{comment.userName}</p>
        <time className="review-card__data" dateTime={formatDateToISO(comment.createAt)}>{humanizeDate(comment.createAt)}</time>
      </div>
      <div className="rate review-card__rate">
        <RatingStars rating={comment.rating}/>
        <p className="visually-hidden">Оценка: {comment.rating}</p>
      </div>
      <ul className="review-card__list">
        <li className="item-list">
          <span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{comment.advantage}</p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{comment.disadvantage}</p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{comment.review}</p>
        </li>
      </ul>
    </li>
  );
}

export default CommentItem;
