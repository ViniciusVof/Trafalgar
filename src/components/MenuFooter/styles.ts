import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 20px;

  h3 {
    margin-bottom: 40px;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 35px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.white};
      font-weight: ${({ theme }) => theme.fontWeight.light};
      font-size: 18px;
    }
  }
`;
