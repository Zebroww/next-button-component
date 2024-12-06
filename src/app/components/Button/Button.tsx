import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonProps } from "./Button.types";

const buttonClasses = cva(
  "font-bold shadow-md",
  {
    variants: {
      flavour: {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        success: "bg-green-500 text-white hover:bg-green-600",
        warning: "bg-yellow-500 text-black hover:bg-yellow-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
        inverse: "bg-gray-500 text-white hover:bg-gray-600",
        purple: "bg-purple-500 text-white hover:bg-purple-600",
      },
      size: {
        small: "text-sm py-1 px-2 h-8",
        medium: "text-base py-2 px-4 h-10",
        large: "text-lg py-3 px-6 h-12",
        extraLarge: "text-xl py-4 px-8 h-14",
      },
      roundness: {
        square: "rounded-none",
        small: "rounded-sm",
        base: "rounded",
        medium: "rounded-md",
        large: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        circular: "rounded-full",
      },
    },
    defaultVariants: {
      flavour: "primary",
      size: "medium",
      roundness: "base",
    },
  }
);

type ExtendedButtonProps = ButtonProps & VariantProps<typeof buttonClasses>;

const Button: React.FC<ExtendedButtonProps> = ({ flavour, size, roundness, children }) => {
  return (
    <button className={buttonClasses({ flavour, size, roundness })}>
      {children}
    </button>
  );
};

export default Button;
