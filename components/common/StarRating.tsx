import { Star } from "lucide-react";

interface StarRatingProps {
  rating?: number;
}

export default function StarRating({
  rating = 5,
}: StarRatingProps) {
  return (
    <div className="flex gap-1 text-yellow-500">
      {[...Array(rating)].map((_, index) => (
        <Star
          key={index}
          size={16}
          fill="currentColor"
        />
      ))}
    </div>
  );
}