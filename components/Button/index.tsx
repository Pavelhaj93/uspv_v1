"use client";

import { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "solid" | "outline";
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    >
      {children}
    </button>
  );
};

export default Button;
