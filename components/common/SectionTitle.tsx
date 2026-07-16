interface SectionTitleProps {
  eyebrow?: string;
  name: string;
  description?: string;
  center?: boolean;
}

export default function SectionTitle({
  eyebrow,
  name,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={center ? "mb-10 text-center" : "mb-10"}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-pink-600">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold text-gray-900">
        {name}
      </h2>

      {description && (
        <p className="mt-3 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}