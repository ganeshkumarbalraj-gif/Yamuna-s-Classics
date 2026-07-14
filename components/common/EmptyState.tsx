interface EmptyStateProps {
  name: string;
  description: string;
}

export default function EmptyState({
  name,
  description,
}: EmptyStateProps) {
  return (
    <div className="py-16 text-center">
      <h3 className="text-2xl font-semibold">
        {name}
      </h3>

      <p className="mt-3 text-gray-600">
        {description}
      </p>
    </div>
  );
}