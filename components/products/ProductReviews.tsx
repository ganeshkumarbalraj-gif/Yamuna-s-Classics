import ReviewService from "@/services/ReviewService";
import ReviewGrid from "@/components/reviews/ReviewGrid";
import ReviewSummary from "@/components/reviews/ReviewSummary";

interface ProductReviewsProps {
  productId: string;
}

export default function ProductReviews({
  productId,
}: ProductReviewsProps) {
  const reviews = ReviewService.getByProduct(productId);

  const averageRating =
    ReviewService.getAverageRating(productId);

  const totalReviews =
    ReviewService.getTotalReviews(productId);

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-bold">
        Customer Reviews
      </h2>

      <ReviewSummary
        averageRating={averageRating}
        totalReviews={totalReviews}
      />

      <div className="mt-10">
        <ReviewGrid reviews={reviews} />
      </div>
    </section>
  );
}