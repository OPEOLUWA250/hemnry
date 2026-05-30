"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Rooms", href: "/rooms" },
    { label: "Menu", href: "/restaurant" },
    { label: "Gallery", href: "/gallery" },
    { label: "Amenities", href: "/amenities" },
    { label: "Blog", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "";
  }, [isOpen]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (Math.abs(scrollDelta) < 8) {
        return;
      }

      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (scrollDelta > 0 && currentScrollY > 80) {
        setIsVisible(false);
      } else if (scrollDelta < 0) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldShowNav = isVisible || isOpen;

  return (
    <nav
      className={`fixed top-6 left-1/2 z-50 w-[90vw] -translate-x-1/2 border border-[#E8E3DA]/90 bg-[#F9F7F2]/95 shadow-[0_14px_35px_rgba(18,18,18,0.12)] backdrop-blur-md transition-all duration-300 ease-out will-change-transform ${
        shouldShowNav
          ? "translate-y-0 opacity-100"
          : "-translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <div className="px-3 sm:px-4 lg:px-5 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#121212]"
          >
            HEMNRY
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-sm font-medium text-[#121212] hover:text-[#C5A059] transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href="/contact"
            className="hidden lg:block px-5 xl:px-6 py-2.5 bg-[#121212] text-[#F9F7F2] font-body text-sm font-medium hover:bg-[#2A2A2A] transition-colors duration-300"
          >
            Reserve
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-center gap-1.5 w-10 h-10 border border-[#E8E3DA] bg-white/70 p-2"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <div
              className={`w-6 h-0.5 bg-[#121212] transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <div
              className={`w-6 h-0.5 bg-[#121212] transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <div
              className={`w-6 h-0.5 bg-[#121212] transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 border-t border-[#E8E3DA] pt-4">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border border-[#E8E3DA] bg-white/70 px-3 py-2.5 text-center font-body text-sm font-medium text-[#121212] hover:text-[#C5A059] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="block mt-3 px-5 py-2.5 bg-[#121212] text-[#F9F7F2] font-body text-sm font-medium text-center hover:bg-[#2A2A2A] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Reserve
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
