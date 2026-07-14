interface SectionTitleProps {
  eyebrow: string;
  name: string;
  description: string;
}

export default function SectionTitle({
  eyebrow,
  name,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">

      <p className="mb-3 text-base font-semibold uppercase tracking-[0.25em] text-sky-600">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
        {name}
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500" />

      <p className="mt-6 text-lg leading-8 text-gray-600">
        {description}
      </p>

    </div>
  );
}