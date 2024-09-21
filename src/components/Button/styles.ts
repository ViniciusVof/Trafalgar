import styled from "styled-components";

interface IButton {
  variant: "primary" | "secondary";
}

export const Wrapper = styled.button<IButton>`
  height: 56px;
  padding: 0px 40px;

  cursor: pointer;

  color: ${({ variant, theme }) =>
    variant === "primary" ? theme.white : theme.primary};

  border-radius: 55px;

  border: ${({ variant, theme }) =>
    variant === "secondary" ? `1px solid ${theme.primary}` : 0};

  background-color: ${({ variant, theme }) =>
    variant === "primary" ? theme.primary : theme.white};
`;
