"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`transition ${
        active
          ? "text-pink-600 font-semibold"
          : "text-gray-700 hover:text-pink-600"
      }`}
    >
      {children}
    </Link>
    <nav className="hidden md:flex gap-8">
  <NavLink href="/">Home</NavLink>
  <NavLink href="/products">Products</NavLink>
  <NavLink href="/workshops">Workshops</NavLink>
  <NavLink href="/gallery">Gallery</NavLink>
  <NavLink href="/about">About</NavLink>
  <NavLink href="/contact">Contact</NavLink>
</nav>
  );
}