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
  center = true,
}: SectionTitleProps) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        center ? "text-center" : "text-left"
      }`}
    >

      {eyebrow && (
        <p
          className="
          mb-4
          inline-block
          rounded-full
          bg-pink-100
          px-4
          py-2
          text-sm
          font-semibold
          uppercase
          tracking-[0.25em]
          text-pink-600
          "
        >
          {eyebrow}
        </p>
      )}


      <h2
        className="
        font-body
        text-4xl
        font-bold
        leading-tight
        text-gray-900
        md:text-5xl
        "
      >
        {name}
      </h2>


      {description && (
        <p
          className="
          mx-auto
          mt-6
          max-w-2xl
          text-lg
          leading-8
          text-gray-600
          font-body
          "
        >
          {description}
        </p>
      )}

    </div>
  );
}