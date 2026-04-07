"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "Studio", href: "/studio" },
  { label: "Expertise", href: "/expertise" },
  { label: "Vision", href: "/vision" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Journal", href: "/journal" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-black/12 py-6"
    >
      <nav className="flex flex-wrap items-center justify-between gap-4 font-(family-name:--font-jost) uppercase tracking-[0.15em] text-[#6d7569]">
        <ul className="flex flex-wrap items-center gap-4 text-[0.95rem] sm:text-base">
          {navItems.map((item, index) => (
            <li key={item.href} className="flex items-center gap-4">
              <Link
                href={item.href}
                className="transition-colors duration-200 hover:text-[#2c3d2d]"
              >
                {item.label}
              </Link>
              {index !== navItems.length - 1 ? (
                <span className="text-[#95a08f]">/</span>
              ) : null}
            </li>
          ))}
        </ul>
        <span aria-hidden className="text-lg text-[#84907f]">
          ↗
        </span>
      </nav>
    </motion.header>
  );
}
