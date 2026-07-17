import RatingStars from "./RatingStars";

interface ReviewSummaryProps {
  averageRating: number;
  totalReviews: number;
}

export default function ReviewSummary({
  averageRating,
  totalReviews,
}: ReviewSummaryProps) {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
      <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-5xl font-bold text-gray-900">
            {averageRating.toFixed(1)}
          </p>

          <div className="mt-3">
            <RatingStars
              rating={averageRating}
              size={22}
            />
          </div>

          <p className="mt-3 text-gray-500">
            Based on {totalReviews} review
            {totalReviews !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="mt-8 md:mt-0">
          {[5, 4, 3, 2, 1].map((star) => (
            <div
              key={star}
              className="mb-2 flex items-center gap-3"
            >
              <span className="w-4 text-sm font-medium">
                {star}
              </span>

              <div className="h-2 w-48 rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-yellow-400"
                  style={{
                    width:
                      star === Math.round(averageRating)
                        ? "100%"
                        : "40%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}