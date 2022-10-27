import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
}