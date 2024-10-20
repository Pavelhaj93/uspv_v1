import { motion } from "framer-motion";
import Link from "next/link";
import React, { type FC } from "react";
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
		<div className="flex flex-col fixed justify-evenly items-center overflow-hidden h-[calc(100vh_-_64px)]">
			<motion.nav
				className="md:hidden w-screen font-montserrat flex flex-col items-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.3 }}
			>
				<ul className="top-10 flex flex-col items-center gap-6 text-5xl p-4">
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
			<LanguageSwitcher mobile />
		</div>
	);
};

export default BurgerMenu;
