import CommentsList from '@components/comments-list/comments-list';
import { Comment } from '@type/comments';
import { sortCommentsByDate } from '@utils/common';
import { useState } from 'react';

type TCommentsBlockProps = {
  comments: Comment[];
}

function CommentsBlock({ comments }: TCommentsBlockProps): JSX.Element {
  const [visibleComments, setVisibleComments] = useState(3);

  const handleShowMoreComments = () => {
    setVisibleComments(visibleComments + 3);
  };

  const sortedComments = sortCommentsByDate(comments);
  const displayedComments = sortedComments.slice(0, visibleComments);

  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
        </div>
        <CommentsList comments={displayedComments} />
        <div className="review-block__buttons">
          {visibleComments < comments.length && (
            <button className="btn btn--purple" type="button" onClick={handleShowMoreComments}>
              Показать больше отзывов
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default CommentsBlock;
