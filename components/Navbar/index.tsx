"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import BurgerMenu from "../BurgerMenu";
import { Fade as Hamburger } from "hamburger-react";
import LanguageSwitcher from "../LangSwitcher";
import { useTranslations } from "next-intl";
import LogoSVG from "./LogoSVG";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const t = useTranslations("navbar");

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setIsVisible(false);
      } else {
        // if scroll up show the navbar
        setIsVisible(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
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
    {
      id: 1,
      name: t("aboutUs"),
      href: "#aboutUsSection",
    },
    {
      id: 2,
      name: t("references"),
      href: "#referencesSection",
    },
    {
      id: 3,
      name: t("contact"),
      href: "#contactSection",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 transition-transform duration-300 ${
        isVisible ? "lg:translate-y-0" : "lg:-translate-y-full"
      }`}
    >
      {/* Background overlay that stretches but doesn't go beyond the height of the navbar */}
      <div
        className={`absolute top-0 left-0 w-full transition-all duration-300 bg-white 
        h-16 ${isOpen ? "h-screen" : ""}`}
      />
      <div
        className="relative mx-auto flex h-16 items-center justify-between px-4 lg:px-8"
        style={{ zIndex: 10 }}
      >
        <Link href="#" className="flex items-center" prefetch={false}>
          <div
            className="group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <LogoSVG color={isHovered ? "#ecc69b" : "#000000"} />
          </div>
          <span className="sr-only">
            USPV company - solar power and energy independence
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <nav className="font-medium">
            <ul className="flex items-baseline gap-10">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className={`uppercase hover:text-primary mt-4 transition duration-300 ease-in-out text-md tracking-tighter text-black`}
                    prefetch={false}
                  >
                    {link.name}
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
