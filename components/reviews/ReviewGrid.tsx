import ReviewCard from "./ReviewCard";
import { Review } from "@/types";

interface ReviewGridProps {
  reviews: Review[];
}

export default function ReviewGrid({
  reviews,
}: ReviewGridProps) {
  if (reviews.length === 0) {
    return (
      <p className="py-10 text-center text-gray-500">
        No reviews yet.
      </p>
    );
  }

  return (
    <div className="grid gap-6">
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
        />
      ))}
    </div>
  );
}