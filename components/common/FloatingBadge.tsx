interface FloatingBadgeProps {
  name: string;
  subtitle: string;
}

export default function FloatingBadge({
  name,
  subtitle,
}: FloatingBadgeProps) {
  return (
    <div
      className="
        rounded-3xl
        border border-white/60
        bg-white/90
        px-6
        py-5
        shadow-2xl
        backdrop-blur-md
        transition-all
        duration-500
        hover:-translate-y-2
        hover:scale-105
        hover:shadow-emerald-200/50
      "
    >
      <h4 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-emerald-600 bg-clip-text text-transparent">
        {name}
      </h4>

      <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-pink-500 to-emerald-600" />

      <p className="mt-3 text-sm font-medium tracking-wide text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}