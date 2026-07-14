interface SectionTitleProps {
  label?: string;

  title: string;

  subtitle?: string;

  center?: boolean;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  center = true,
}: SectionTitleProps) {
  return (
    <div
      className={`mb-14 ${
        center ? "text-center" : ""
      }`}
    >
      {label && (
        <p className="uppercase tracking-widest text-pink-600 font-semibold">
          {label}
        </p>
      )}

      <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}