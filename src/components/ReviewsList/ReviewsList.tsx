import { FC } from "react";
import { IReview } from "types";

type ReviewsListPropsType = {
  reviews: IReview[];
};

const ReviewsList: FC<ReviewsListPropsType> = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p>{`We don't have any reviews for this movie.`}</p>;
  }

  return (
    <ul>
      {reviews.map(({ id, author = "No info", content = "No content" }) => (
        <li key={id}>
          <h4>Author: {author} </h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsList;
