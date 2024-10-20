import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

import CzechFlagSVG from "./svg/CzechFlag.svg";
import EnglishFlagSVG from "./svg/EnglishFlag.svg";
import IndianFlagSVG from "./svg/IndianFlag.svg";
import KazakhstanFlagSVG from "./svg/KazakhstanFlag.svg";
import LogoSVG from "./svg/Logo.svg";
import RomaniaFlagSVG from "./svg/RomaniaFlag.svg";
import TurkeyFlagSVG from "./svg/TurkeyFlag.svg";
import UkraineFlagSVG from "./svg/UkraineFlag.svg";

const iconVariants = cva("", {
	variants: {
		size: {
			sm: "size-6",
			lg: "size-10",
			logo: "size-32",
		},
	},
	defaultVariants: {
		size: "sm",
	},
});

export type IconComponent = React.FC<
	React.SVGProps<SVGSVGElement> & VariantProps<typeof iconVariants>
>;

function withStyles(
	Icon: React.FC<React.SVGProps<SVGSVGElement>>,
): IconComponent {
	const render: IconComponent = ({ className, size, ...props }) => (
		<Icon
			aria-hidden
			{...props}
			className={cn(iconVariants({ size, className }))}
		/>
	);
	render.displayName = "Icon";

	return render;
}

export const IconIndianFlag = withStyles(IndianFlagSVG);
export const IconKazakhstanFlag = withStyles(KazakhstanFlagSVG);
export const IconRomaniaFlag = withStyles(RomaniaFlagSVG);
export const IconTurkeyFlag = withStyles(TurkeyFlagSVG);
export const IconUkraineFlag = withStyles(UkraineFlagSVG);
export const IconEnglishFlag = withStyles(EnglishFlagSVG);
export const IconCzechFlag = withStyles(CzechFlagSVG);
export const IconLogo = withStyles(LogoSVG);
