interface StatCardProps {
  value: string;

  label: string;
}

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-pink-600">
        {value}
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        {label}
      </p>
    </div>
  );
}