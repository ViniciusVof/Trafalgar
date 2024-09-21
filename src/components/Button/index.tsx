import { HTMLAttributes } from "react";
import { Wrapper } from "./styles";

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({ variant = "primary", ...props }: IButton) {
  return <Wrapper variant={variant} {...props} />;
}
