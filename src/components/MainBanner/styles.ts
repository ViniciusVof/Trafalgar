import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GroupDotsContainer = styled.div`
  position: absolute;
  top: 0;
  left: -50px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 109px;
  max-width: ${({ theme }) => theme.boxedWidth};
  color: ${({ theme }) => theme.heading};
`;

export const Informations = styled.div`
  p {
    color: ${({ theme }) => theme.heading};
    font-size: 21px;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    margin-bottom: 45px;
    margin-top: 25px;
  }
`;

export const Illustration = styled.div``;
