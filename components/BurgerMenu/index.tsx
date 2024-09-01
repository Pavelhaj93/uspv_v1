import React, { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import LanguageSwitcher from "../LangSwitcher";

interface BurgerMenuProps {
  links: {
    id: number;
    name: string;
    href: string;
  }[];
  setIsOpen: (value: boolean) => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ links, setIsOpen }) => {
  return (
    <div className="flex flex-col">
      <motion.nav
        className="md:hidden bg-black h-screen w-screen text-white asbolute top-0 flex-col flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="relative top-10 flex flex-col items-center gap-6 text-6xl p-4">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="uppercase hover:underline"
                onClick={() => setIsOpen(false)}
                prefetch={false}
              >
                {link.name}
              </Link>
            </li>
          ))}
            
        </ul>
      </motion.nav>
      <LanguageSwitcher />
    </div>
  );
};

export default BurgerMenu;
