import styled from "styled-components";

export const Wrapper = styled.button`
  height: 56px;
  padding: 0px 40px;
  color: ${({ theme }) => theme.white};
  border-radius: 55px;
  border: 0;
  background-color: ${({ theme }) => theme.primary};
`;
