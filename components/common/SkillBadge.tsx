interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({
  skill,
}: SkillBadgeProps) {
  return (
    <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600 transition hover:bg-pink-200">
      {skill}
    </span>
  );
}