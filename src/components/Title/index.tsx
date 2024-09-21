import { ReactNode } from "react";
import { Wrapper } from "./styles";

interface ITitle {
  centralized?: boolean;
  children: ReactNode;
}

export function Title({ children, centralized = false }: ITitle) {
  return <Wrapper centralized={centralized}>{children}</Wrapper>;
}
