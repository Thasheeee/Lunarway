"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


   const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tours", label: "Tours" },
    { href: "/contact", label: "Contact us" },
    { href: "/about", label: "About us" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-white/90 backdrop-blur-sm py-4"
        }`}
        style={{ borderBottom: "1px solid #EDE8DE" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/lun-logo.webp"
              alt="Lunarway Travels"
              width={130}
              height={50}
              className="h-auto"
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 pb-1
                    ${isActive(href) ? "text-[#1A1A18]" : "text-[#7A7A72] hover:text-[#1A1A18]"}
                  `}
                  style={
                    isActive(href)
                      ? {
                          borderBottom: "2px solid #C9A96E",
                          paddingBottom: "2px",
                        }
                      : {}
                  }
                >
                  {label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/tours"
                className="text-sm font-semibold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-200"
                style={{
                  background: "#1A1A18",
                  color: "white",
                  letterSpacing: "0.08em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#C9A96E";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#1A1A18";
                }}
              >
                Book Now
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#1A1A18] z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        />
        <ul className="relative z-10 h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href} onClick={() => setIsOpen(false)}>
              <Link
                href={href}
                className="text-white text-2xl font-light tracking-widest uppercase"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {label}
              </Link>
            </li>
          ))}
          <li onClick={() => setIsOpen(false)}>
            <Link
              href="/tours"
              className="mt-4 px-8 py-3 text-sm font-semibold tracking-widest uppercase rounded-sm"
              style={{ background: "#C9A96E", color: "white" }}
            >
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
