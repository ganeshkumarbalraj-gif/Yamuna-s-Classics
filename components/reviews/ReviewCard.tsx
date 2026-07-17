import { CheckCircle } from "lucide-react";

import RatingStars from "./RatingStars";
import { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({
  review,
}: ReviewCardProps) {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">
            {review.customerName}
          </h3>

          <p className="text-sm text-gray-500">
            {new Date(review.date).toLocaleDateString()}
          </p>
        </div>

        {review.verified && (
          <div className="flex items-center gap-1 text-sm text-emerald-600">
            <CheckCircle size={16} />
            Verified
          </div>
        )}
      </div>

      <div className="mt-4">
        <RatingStars rating={review.rating} />
      </div>

      <h4 className="mt-4 text-lg font-semibold">
        {review.title}
      </h4>

      <p className="mt-2 text-gray-600">
        {review.comment}
      </p>
    </div>
  );
}