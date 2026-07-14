interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        {children}
      </div>
    </section>
  );
}