interface PageHeaderProps {
  name: string;
  subtitle?: string;
}

export default function PageHeader({
  name,
  subtitle,
}: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-r from-pink-50 via-white to-yellow-50 border-b">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold">{name}</h1>

        {subtitle && (
          <p className="mt-4 text-lg text-gray-600">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}