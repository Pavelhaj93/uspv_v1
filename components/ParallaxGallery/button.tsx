import { cn } from "@grohe/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  'inline-flex items-center px-4 py-2.5 justify-center whitespace-nowrap rounded-full font-[600] ring-offset-background transition-colors disabled:cursor-not-allowed disabled:bg-[#b5b5b5] disabled:text-base-black focus:outline-0 focus-visible:outline focus-visible:after:content-[""] focus-visible:after:display-block focus-visible:after:w-auto focus-visible:after:h-auto focus-visible:after:m-2.5 focus-visible:after:absolute focus-visible:after:bottom-[-5px] focus-visible:after:left-[-5px] focus-visible:after:right-[-5px] focus-visible:after:top-[-5px] focus-visible:after:rounded-full focus-visible:after:transition-all focus-visible:after:duration-200 focus-visible:after:ease-in-out focus-visible:after:shadow-[0px_0px_8px_1px_#0e2b4b,0px_0px_0px_2px_#0f2b4b,0px_0px_0px_6px_#FFFFFF] focus-visible:outline-[6px] focus-visible:outline-base-white focus-visible:outline-offset-6 disabled:hover:after:content-none',
  {
    variants: {
      variant: {
        primary: "bg-brand-800 text-base-white hover:bg-brand-900",
        secondary:
          "bg-transparent border-[1px] border-gray-400 text-base-black hover:bg-brand-800 hover:text-base-white",
        tertiary: "bg-brand-500 text-base-white hover:bg-brand-600",
        link: '!p-2 !rounded-[0px] relative hover:after:content-[""] focus:after:content-none hover:after:display-block hover:after:w-full hover:after:h-[1px] hover:after:bg-brand-800 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:transition-all hover:after:duration-200 hover:after:ease-in-out focus-visible:after:content-none focus-visible:outline-0 focus-visible:shadow-[0px_0px_4px_2px_#0e2b4b,0px_0px_0px_2px_#0f2b4b,0px_0px_0px_6px_#FFFFFF] disabled:bg-transparent disabled:text-[#b5b5b5]',
        primaryInverse:
          "bg-[white] text-base-black hover:bg-brand-100 focus-visible:after:content-none focus-visible:outline-2 focus-visible:outline-base-white focus-visible:outline-offset-[6px]",
        secondaryInverse:
          "bg-transparent border-[1px] border-gray-400 text-base-white hover:bg-[white] hover:text-base-white hover:text-base-black focus-visible:outline-brand-800 focus-visible:after:content-none focus-visible:outline-2 focus-visible:outline-base-white focus-visible:outline-offset-[6px]",
        tertiaryInverse:
          "bg-brand-500 text-base-white hover:bg-brand-600 ] focus-visible:after:content-none focus-visible:outline-2 focus-visible:outline-base-white focus-visible:outline-offset-[6px]",
        linkInverse:
          'text-base-white !p-2 !rounded-[0px] relative hover:after:content-[""] focus:after:content-none hover:after:display-block hover:after:w-full hover:after:h-[1px] hover:after:bg-[#fff] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:transition-all hover:after:duration-200 hover:after:ease-in-out  focus-visible:after:content-none focus-visible:outline-0 focus-visible:shadow-[0px_0px_0px_2px_#FFFFFF] disabled:bg-transparent disabled:text-[#b5b5b5]',
      },
      size: {
        large: "text-[1.125rem] p-4",
        medium: "text-[1rem]",
      },
      withIcon: {
        true: "p-2.5",
        false: "gap-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "large",
      withIcon: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, withIcon, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, withIcon, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
