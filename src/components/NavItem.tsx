"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation"; // works in App Router
import { ReactNode } from "react";

export default function NavItem({
  href,
  label,
  accent,
  icon,
}: {
  href: string;
  label: string;
  accent?: string;
  icon?: ReactNode;
}) {
  const pathname = usePathname();
  const active = pathname === href;
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between px-3 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
      >
        <span className="flex items-center gap-2">
          {icon}
          <span>{label}</span>
        </span>
        <span className="text-xs text-neutral-400">&#8599;</span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-2 border-l-2 px-3 py-1.5 text-sm transition-colors",
        active
          ? "font-semibold"
          : "border-transparent text-neutral-600 hover:text-neutral-900"
      )}
      style={active ? { borderLeftColor: accent, color: accent } : undefined}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
