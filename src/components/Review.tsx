import { title } from 'process';
import React from 'react';
import Rating from './Rating';
interface ReviewProps {
  title: string;
  disc: string;
  rating: number;
}
const Review: React.FC<ReviewProps> = ({ disc, rating, title }) => {
  return (
    <section className="flex flex-col gap-y-2">
      <h3 className="heading">{title}</h3>
      <p>{disc}</p>
      <Rating initialRating={rating} maxRating={5} />
    </section>
  );
};

export default Review;
