"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation"; // works in App Router
import { ReactNode } from "react";

export default function NavItem({
  href,
  label,
  badge,
  icon,
}: {
  href: string;
  label: string;
  badge?: number | string;
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
        className={clsx(
          "flex text-sm font-semibold items-center justify-between rounded-xl px-3 py-2",
        )}
      >
        <div className="flex items-center gap-2">
          {icon}
          <span>{label}</span>
        </div>
{badge !== undefined && (
  <span
    className={clsx(
      "ml-3 inline-flex h-5 w-5 items-center justify-center rounded-sm text-xs font-semibold",
    )}
    style={{
      minWidth: "1.25rem",
      backgroundColor: "#f3f4f6",
      color: "#000",
      border: "1px solid #e5e7eb"
    }}
  >
    {badge}
  </span>
)}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={clsx(
        "flex text-sm font-semibold items-center justify-between rounded-xl px-3 py-2",
        active && "bg-gray-900 text-white dark:bg-gray-100 dark:text-black"
      )}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </div>
{badge !== undefined && (
  <span
    className={clsx(
      "ml-3 inline-flex h-5 w-5 items-center justify-center rounded-sm text-xs font-semibold",
    )}
    style={{
      minWidth: "1.25rem",
      backgroundColor: "#f3f4f6",
      color: "#000",
      border: "1px solid #e5e7eb"
    }}
  >
    {badge}
  </span>
)}
    </Link>
  );
}
