"use client";

import Link from "next/link";
import { MapPin, Mail, Phone, ArrowUp } from "lucide-react";

const EXPLORE_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/advocacies", label: "Advocacies" },
  { href: "/service-learning", label: "Service Learning" },
  { href: "/repository", label: "Forms & Uploads" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        {/* Top: logo + tagline */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">CECA</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              Community Engagement and CICM Advocacies Office - bridging
              academic excellence with community needs at the University of
              Saint Louis.
            </p>
          </div>

          <Link
            href="/repository"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 transition-colors hover:bg-blue-50"
          >
            Get Involved
          </Link>
        </div>

        {/* Middle: link columns */}
        <div className="grid gap-12 py-14 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Contact
            </p>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-none text-slate-500" />
                <span>Tuguegarao City, Cagayan Valley, Philippines</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="flex-none text-slate-500" />
                <span>ceca@usl.edu.ph</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="flex-none text-slate-500" />
                <span>(078) 000-0000</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Office Hours
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              <li>Monday – Friday</li>
              <li className="text-slate-400">8:00 AM – 5:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse items-center gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} CECA — University of Saint Louis. All
            rights reserved.
          </p>

          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}