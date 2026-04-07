"use client";

import Link from "next/link";
import { navItems } from "../lib/nav-items";

export function Footer() {
  return (
    <footer className="min-w-full bg-[#2a3324] px-6 py-10 sm:px-10 lg:px-14 sm:py-12 mt-4">
      <div className="mx-auto w-full max-w-[1480px]">
        <div className="relative overflow-hidden">
          <span
            aria-hidden
            className="pointer-events-none absolute right-0 top-1 text-[clamp(4rem,13vw,10rem)] leading-none text-white/10"
          >
            Vanguardis
          </span>

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <div>
              <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.8rem,5vw,5rem)] leading-[0.9] text-white">
                Vanguardis
              </h2>
              <p className="mt-6 max-w-xl font-(family-name:--font-jost) text-[1.12rem] leading-relaxed text-[#cad2c3] sm:text-[1.35rem]">
                We forge advanced habitats by merging progressive structural
                engineering with conscious material application and timeless
                spatial character.
              </p>
              <Link
                href="#"
                className="mt-8 inline-flex items-center gap-2 border-b border-[#d8e0d5]/60 pb-1 font-(family-name:--font-jost) text-sm uppercase tracking-[0.12em] text-[#eaf0e4] transition-colors hover:text-white"
              >
                Start a Conversation <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>

          <div className="relative mt-12 border-t border-white/14 pt-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <ul className="flex flex-wrap gap-x-7 gap-y-3 font-(family-name:--font-jost) text-sm uppercase tracking-[0.14em] text-[#d0d8ca] sm:text-base">
                {navItems.map((item) => (
                  <li key={`footer-${item.href}`}>
                    <Link href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="font-(family-name:--font-jost) text-xs uppercase tracking-[0.14em] text-[#b9c2b1] sm:text-sm">
                © 2024 Vanguardis Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
