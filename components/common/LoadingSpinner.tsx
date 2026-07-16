interface LoadingSpinnerProps {
  text?: string;
}

export default function LoadingSpinner({
  text = "Loading...",
}: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-pink-500 border-t-transparent" />

      <p className="mt-4 text-gray-600">
        {text}
      </p>
    </div>
  );
}