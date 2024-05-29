import CommentItem from '@components/comment-item/comment-item';
import { Comment } from '@type/comments';

type TCommentsListProps = {
  comments: Comment[];
}

function CommentsList({ comments }: TCommentsListProps): JSX.Element {
  return (
    <ul className="review-block__list" data-testid="comments-list">
      {comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)}
    </ul>
  );
}

export default CommentsList;
