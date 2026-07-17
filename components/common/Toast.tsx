"use client";

interface ToastProps {
  message: string;
  show: boolean;
}

export default function Toast({
  message,
  show,
}: ToastProps) {
  if (!show) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 rounded-xl bg-emerald-600 px-6 py-4 text-white shadow-xl">
      {message}
    </div>
  );
}