interface FloatingBadgeProps {
  name: string;
  subtitle: string;
}

export default function FloatingBadge({
  name,
  subtitle,
}: FloatingBadgeProps) {
  return (
    <div className="rounded-2xl border border-pink-100 bg-white/95 px-5 py-4 shadow-xl backdrop-blur">

      <h4 className="text-lg font-bold text-pink-600">
        {name}
      </h4>

      <p className="mt-1 text-sm text-gray-600">
        {subtitle}
      </p>

    </div>
  );
}