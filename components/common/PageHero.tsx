interface PageHeroProps {
  badge: string;
  name: string;
  description: string;
}

export default function PageHero({
  badge,
  name,
  description,
}: PageHeroProps) {
  return (
    <div className="text-center">
      <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
        {badge}
      </span>

      <h1 className="mt-6 text-5xl font-bold text-gray-800">
        {name}
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
        {description}
      </p>
    </div>
  );
}