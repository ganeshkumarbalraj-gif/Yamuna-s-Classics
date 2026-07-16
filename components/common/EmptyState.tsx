import { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export default function EmptyState({
  title,
  description,
  icon,
  action,
}: EmptyStateProps) {
  return (
    <div className="rounded-3xl bg-white p-16 text-center shadow-lg">
      {icon ? (
        <div className="mb-6 flex justify-center text-6xl">
          {icon}
        </div>
      ) : null}

      <h2 className="text-3xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-gray-600">
        {description}
      </p>

      {action ? (
        <div className="mt-8">
          {action}
        </div>
      ) : null}
    </div>
  );
}