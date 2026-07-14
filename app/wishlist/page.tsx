import PageHeader from "@/components/layout/PageHeader";
import WishlistGrid from "@/components/wishlist/WishlistGrid";

export default function WishlistPage() {
  return (
    <>
      <PageHeader
        name="My Wishlist"
        subtitle="Your saved handmade favourites."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <WishlistGrid />
      </section>
    </>
  );
}