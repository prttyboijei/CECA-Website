"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/advocacies", label: "Advocacies" },
  { href: "/ceca-guidelines", label: "CECA Guidelines" },
  { href: "/repository", label: "Forms & Uploads" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4 sm:top-6 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-gray-100 bg-white/90 px-6 py-3 shadow-sm shadow-slate-900/5 backdrop-blur-md sm:px-8 sm:py-4">
        <Link href="/" className="flex items-center gap-4">
          <img
            src="/F6ABCAC0-FDDB-407B-AE32-482657B8849D.png"
            alt="CECA Logo"
            className="h-20 w-auto object-contain mix-blend-multiply sm:h-24"
          />
          <span className="hidden text-xl font-semibold tracking-tight text-slate-800 lg:inline">
            Community Engagement and CICM Advocacies
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-slate-700 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-gray-100 bg-white px-6 py-4 shadow-sm shadow-slate-900/5 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-600 hover:text-blue-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}