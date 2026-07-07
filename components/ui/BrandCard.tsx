import { ReactNode } from "react";

interface BrandCardProps {
  children: ReactNode;
}

export default function BrandCard({
  children,
}: BrandCardProps) {
  return (
    <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {children}
    </div>
  );
}