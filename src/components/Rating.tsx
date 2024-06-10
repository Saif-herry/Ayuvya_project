import React from 'react';
import useRating from '../hooks/useRating';

interface RatingProps {
  initialRating?: number;
  maxRating?: number;
}

const Rating: React.FC<RatingProps> = ({
  initialRating = 0,
  maxRating = 5
}) => {
  const {
    rating,
    hoverRating,
    handleRating,
    handleMouseEnter,
    handleMouseLeave
  } = useRating(initialRating, maxRating);

  const renderStar = (index: number) => (
    <svg
      key={index}
      onClick={() => handleRating(index + 1)}
      onMouseEnter={() => handleMouseEnter(index + 1)}
      onMouseLeave={handleMouseLeave}
      className={`w-12 h-12 cursor-pointer ${
        (hoverRating || rating) > index ? 'text-yellow-400' : 'text-gray-300'
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.957h5.211c.969 0 1.371 1.24.588 1.81l-4.21 3.073 1.618 4.957c.3.921-.755 1.688-1.538 1.115L10 15.347l-4.208 3.073c-.783.573-1.837-.194-1.538-1.115l1.618-4.957-4.21-3.073c-.783-.573-.38-1.81.588-1.81h5.211L9.049 2.927z" />
    </svg>
  );

  return (
    <div className="flex space-x-1">
      {[...Array(maxRating)].map((_, index) => renderStar(index))}
    </div>
  );
};

export default Rating;
