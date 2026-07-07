interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-pink-600">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}