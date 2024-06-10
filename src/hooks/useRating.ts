import { useState } from 'react';

const useRating = (initialRating: number = 0, maxRating: number = 5) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleRating = (newRating: number) => {
    if (newRating >= 0 && newRating <= maxRating) {
      setRating(newRating);
    }
  };

  const handleMouseEnter = (newRating: number) => {
    setHoverRating(newRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(null);
  };

  return {
    rating,
    hoverRating,
    handleRating,
    handleMouseEnter,
    handleMouseLeave
  };
};

export default useRating;
