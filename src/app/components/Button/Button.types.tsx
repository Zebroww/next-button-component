import React from "react";


export type Flavour =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "inverse"
  | "purple";


export type Size = "small" | "medium" | "large" | "extraLarge";

export type Roundness =
  | "square"
  | "small"
  | "base"
  | "medium"
  | "large"
  | "xl"
  | "2xl"
  | "circular";


export interface ButtonProps {

  flavour: Flavour;


  size: Size;


  roundness: Roundness;


  children: React.ReactNode;

  
  disabled?: boolean;

 
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
