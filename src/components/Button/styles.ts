import styled from "styled-components";

interface IButton {
  variant: "primary" | "secondary";
}

export const Wrapper = styled.button<IButton>`
  height: 56px;
  padding: 0px 40px;
  color: ${({ theme }) => theme.white};
  border-radius: 55px;
  border: 0;
  background-color: ${({ variant, theme }) =>
    variant === "primary" ? theme.primary : theme.white};
`;
