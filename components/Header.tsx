"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LANGUAGES, NAV_LINKS } from "@/lib/constants";

const LOGO_SIZE = 80;
const SCROLL_THRESHOLD_PX = 16;
const MENU_TRANSITION_DURATION_S = 0.5;
const MENU_TRANSITION_DISTANCE_PX = 16;

const isActiveLink = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

export const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]>(
    LANGUAGES[0]
  );
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMobileMenu = () => {
    setIsMenuMounted(true);
    setIsMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  useGSAP(
    () => {
      const nav = mobileNavRef.current;

      if (!nav) {
        return;
      }

      if (isMenuOpen) {
        gsap.fromTo(
          nav,
          { opacity: 0, y: -MENU_TRANSITION_DISTANCE_PX },
          {
            opacity: 1,
            y: 0,
            duration: MENU_TRANSITION_DURATION_S,
            ease: "power2.out",
          }
        );
      } else {
        gsap.to(nav, {
          opacity: 0,
          y: -MENU_TRANSITION_DISTANCE_PX,
          duration: MENU_TRANSITION_DURATION_S,
          ease: "power2.in",
          onComplete: () => setIsMenuMounted(false),
        });
      }
    },
    { dependencies: [isMenuOpen] }
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-500 ${
        isMenuMounted
          ? "bg-neutral-950"
          : isScrolled
            ? "bg-neutral-950/50 backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between gap-4 px-10 sm:px-10 lg:justify-center lg:px-14 lg:gap-10 transition-[padding] duration-500 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <Link
          href="/"
          className="flex flex-col items-center gap-1 transition-opacity duration-200 hover:opacity-80"
        >
          <Image
            src="/assets/images/logo-white.png"
            alt="López Couture"
            width={LOGO_SIZE}
            height={LOGO_SIZE}
            priority
            className={`h-auto transition-[width] duration-500 ${
              isScrolled ? "w-13" : "w-20"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-16 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-white after:transition-transform after:duration-500 after:content-[''] hover:text-white hover:after:scale-x-100 ${
                isActiveLink(pathname, link.href)
                  ? "text-white after:scale-x-100"
                  : "text-white/90 after:scale-x-0"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLangOpen((prev) => !prev)}
              aria-expanded={isLangOpen}
              aria-haspopup="listbox"
              className="flex items-center gap-1 text-xs font-medium uppercase tracking-[0.15em] text-white/90 transition-colors duration-200 hover:text-white"
            >
              {language}
              <ChevronIcon
                className={`size-3 transition-transform duration-200 ${
                  isLangOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLangOpen && (
              <ul
                role="listbox"
                className="absolute right-0 mt-3 min-w-20 rounded-md border border-white/10 bg-neutral-950 py-1 shadow-lg"
              >
                {LANGUAGES.map((lang) => (
                  <li key={lang}>
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage(lang);
                        setIsLangOpen(false);
                      }}
                      className="block w-full px-3 py-1.5 text-left text-xs uppercase tracking-[0.15em] text-white/90 transition-colors duration-200 hover:text-white"
                    >
                      {lang}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        <button
          type="button"
          onClick={() => (isMenuOpen ? closeMobileMenu() : openMobileMenu())}
          aria-expanded={isMenuOpen}
          aria-label="Abrir menú"
          className="flex flex-col gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-white transition-transform duration-200 ${
              isMenuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-opacity duration-200 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-transform duration-200 ${
              isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {isMenuMounted && (
        <nav
          ref={mobileNavRef}
          className="flex flex-col gap-6 border-t border-white/10 px-6 py-8 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className={`w-fit text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-200 hover:text-white ${
                isActiveLink(pathname, link.href)
                  ? "text-white underline underline-offset-4"
                  : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex gap-4 pt-2">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-200 ${
                  language === lang
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M1 1.5L6 6.5L11 1.5"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
