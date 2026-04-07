"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Studio", href: "/studio" },
  { label: "Expertise", href: "/expertise" },
  { label: "Vision", href: "/vision" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Journal", href: "/journal" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-black/12 py-6"
    >
      <nav className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/">
          <span className="font-(family-name:--font-cormorant) text-3xl leading-none text-[#263226] tracking-tight">
            Vanguardis
          </span>
        </Link>

        <ul className="flex flex-wrap items-center gap-4 font-(family-name:--font-jost) text-[0.95rem] uppercase tracking-[0.15em] sm:text-base">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href} className="flex items-center gap-4">
                <Link
                  href={item.href}
                  className={`transition-colors duration-200 hover:text-[#2c3d2d] ${
                    isActive
                      ? "text-[#2c3d2d] font-medium"
                      : "text-[#6d7569]"
                  }`}
                >
                  {item.label}
                </Link>
                {index !== navItems.length - 1 ? (
                  <span className="text-[#95a08f]">/</span>
                ) : null}
              </li>
            );
          })}
        </ul>

        <Link
          href="/studio#contact"
          className="hidden sm:inline-flex items-center gap-2 border border-[#2c3c2d] px-4 py-2 font-(family-name:--font-jost) text-xs uppercase tracking-[0.14em] text-[#2c3c2d] transition-colors hover:bg-[#2c3c2d] hover:text-[#d8e0d5]"
        >
          Start a Project
        </Link>
      </nav>
    </motion.header>
  );
}
