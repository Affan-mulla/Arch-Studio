export const navItems = [
  { label: "Studio", href: "/studio" },
  { label: "Expertise", href: "/expertise" },
  { label: "Vision", href: "/vision" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Journal", href: "/journal" },
] as const;

export type NavItem = (typeof navItems)[number];
