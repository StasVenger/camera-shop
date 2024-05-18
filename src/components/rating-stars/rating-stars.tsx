type TRatingStarsProps = {
  rating: number;
}

function RatingStars({ rating }: TRatingStarsProps): JSX.Element {
  const stars = Array.from({ length: 5 }, (_, index) => ({ id: `star-${index}` }));
  return (
    <>
      {stars.map((star) => (
        <svg key={star.id} width={17} height={16} aria-hidden="true">
          <use xlinkHref={rating > stars.indexOf(star) ? '#icon-full-star' : '#icon-star'} />
        </svg>))}
    </>

  );
}

export default RatingStars;
