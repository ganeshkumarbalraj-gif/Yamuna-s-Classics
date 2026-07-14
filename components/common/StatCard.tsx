interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <h3 className="text-4xl font-bold text-pink-600">
        {value}
      </h3>

      <p className="mt-2 text-gray-600">
        {label}
      </p>

    </div>
  );
}