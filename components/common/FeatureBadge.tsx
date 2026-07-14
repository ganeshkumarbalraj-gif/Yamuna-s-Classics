interface FeatureBadgeProps {
  text: string;
}

export default function FeatureBadge({
  text,
}: FeatureBadgeProps) {
  return (
    <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
      {text}
    </span>
  );
}