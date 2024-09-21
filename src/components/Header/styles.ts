import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  padding: 56px;
  max-width: ${({ theme }) => theme.boxedWidth};
  color: ${({ theme }) => theme.heading};
  display: flex;
  justify-content: space-between;
`;

export const Menu = styled.nav`
  display: flex;
  gap: 40px;
`;

export const MenuItem = styled.a`
  cursor: pointer;

  &:hover {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
