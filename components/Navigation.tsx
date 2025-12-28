"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Only track scroll sections on home page
      if (pathname === "/") {
        const sections = ["home", "about", "contact"];
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/projects") return pathname === "/projects";
    if (href === "/") return pathname === "/" && activeSection === "home";
    if (href.startsWith("/#")) {
      const section = href.replace("/#", "");
      return pathname === "/" && activeSection === section;
    }
    return false;
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? "top-4" : "top-6"
      }`}
    >
      <div className="glass rounded-full px-2 py-2">
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 block ${
                  isActive(link.href)
                    ? "text-linear-text bg-white/5"
                    : "text-linear-muted hover:text-linear-text"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-white/5 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
