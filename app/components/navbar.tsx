"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "../lib/nav-items";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="border-b border-black/12 py-5"
      >
        <nav className="flex items-center justify-between gap-4 font-(family-name:--font-jost) uppercase tracking-[0.15em] text-[#6d7569]">
          <Link
            href="/"
            className="font-(family-name:--font-cormorant) text-[1.55rem] leading-none text-[#263226] tracking-tight normal-case"
          >
            Vanguardis
          </Link>

          <ul className="hidden md:flex items-center gap-4 text-[0.82rem]">
            {navItems.map((item, index) => {
              const active = pathname === item.href;
              return (
                <li key={item.href} className="flex items-center gap-4">
                  <Link
                    href={item.href}
                    className={`transition-colors duration-200 ${
                      active
                        ? "text-[#2c3d2d] font-medium"
                        : "hover:text-[#2c3d2d]"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {index !== navItems.length - 1 && (
                    <span className="text-[#95a08f]">/</span>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-2 border border-[#2c3c2d] px-4 py-2 font-(family-name:--font-jost) text-[0.7rem] uppercase tracking-[0.14em] text-[#2c3c2d] transition-colors duration-200 hover:bg-[#2c3c2d] hover:text-[#d8e0d5]"
            >
              Start a Project
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden text-[#6d7569] text-xl"
              aria-label="Toggle menu"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-black/12 bg-[#d8e0d5] md:hidden"
          >
            <ul className="flex flex-col py-4 px-4 gap-4 font-(family-name:--font-jost) text-sm uppercase tracking-[0.15em] text-[#6d7569]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-1 transition-colors hover:text-[#2c3d2d]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
