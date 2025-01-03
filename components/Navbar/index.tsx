"use client";

import { Fade as Hamburger } from "hamburger-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import BurgerMenu from "../BurgerMenu";
import LanguageSwitcher from "../LangSwitcher";
import ReactLogo from "@/app/[locale]/icons/ReactLogo";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const t = useTranslations("navbar");

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;

      // If scrolled less than or equal to 100px, always show navbar
      if (scrollY <= 100) {
        setIsVisible(true);
      } else {
        // Show or hide based on scroll direction
        setIsVisible(scrollY < lastScrollY);
      }

      setLastScrollY(scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

  // Close burger menu on resize if the screen is larger than a specific size
  const handleResize = useCallback(() => {
    if (window.innerWidth >= 640 && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const links = [
    { id: 1, name: t("aboutUs"), href: "#aboutUsSection" },
    { id: 2, name: t("references"), href: "#referencesSection" },
    { id: 3, name: t("contact"), href: "#contactSection" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 transition-transform duration-300 ${
        !isOpen && (isVisible ? "translate-y-0" : "-translate-y-full")
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-full transition-all duration-300 bg-white 
        h-14 ${isOpen ? "h-screen" : ""}`}
      />
      <div
        className="relative mx-auto flex h-14 items-center justify-between px-4 lg:px-8"
        style={{ zIndex: 10 }}
      >
        <Link
          href="#heroSection"
          className="flex items-center"
          prefetch={false}
        >
          <ReactLogo
            className="md:h-11 sm:h-10 h-9"
            color={isHovered ? "#0289b9" : "#302A63"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <span className="sr-only">
            USPV company - solar power and energy independence
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-7">
          <nav className="font-medium">
            <ul className="flex items-baseline gap-7">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="uppercase group hover:text-secondary mt-4 transition-colors font-normal text-primary"
                    prefetch={false}
                  >
                    {link.name}
                    <span className="block max-w-full scale-x-0 group-hover:scale-x-100 duration-300 transition-transform h-[1px] bg-sky-600 origin-center"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSwitcher />
        </div>
        <div className="md:hidden flex items-center">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            color="black"
            size={24}
            label="Toggle menu"
          />
        </div>
      </div>
      {isOpen && <BurgerMenu links={links} setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Navbar;
