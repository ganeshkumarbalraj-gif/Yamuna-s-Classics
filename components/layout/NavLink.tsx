"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({
  href,
  children,
}: NavLinkProps) {
  const pathname = usePathname();

  const active =
    pathname === href ||
    (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className="group relative px-2 py-2 text-[15px] font-medium text-gray-700 transition-colors duration-300 hover:text-emerald-600"
    >
      {children}

      <span
        className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-emerald-600 transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}