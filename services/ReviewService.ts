import { reviews } from "@/data/reviews";

class ReviewService {
  getAll() {
    return reviews;
  }

  getByProduct(productId: string) {
    return reviews.filter(
      (review) => review.productId === productId
    );
  }

  getAverageRating(productId: string) {
    const productReviews = this.getByProduct(productId);

    if (productReviews.length === 0) {
      return 0;
    }

    const total = productReviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );

    return total / productReviews.length;
  }

  getTotalReviews(productId: string) {
    return this.getByProduct(productId).length;
  }
}

const reviewService = new ReviewService();

export default reviewService;