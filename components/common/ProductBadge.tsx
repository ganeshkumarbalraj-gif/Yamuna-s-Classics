interface ProductBadgeProps {
  children: React.ReactNode;

  variant?:
    | "default"
    | "success"
    | "warning"
    | "info";
}

export default function ProductBadge({
  children,
  variant = "default",
}: ProductBadgeProps) {
  const styles = {
    default:
      "bg-pink-100 text-pink-700",

    success:
      "bg-green-100 text-green-700",

    warning:
      "bg-amber-100 text-amber-700",

    info:
      "bg-sky-100 text-sky-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[variant]}`}
    >
      {children}
    </span>
  );
}