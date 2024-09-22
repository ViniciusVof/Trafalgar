import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-top: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 70px;
  }
`;

export const Container = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.boxedWidth};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 34px;
  margin-top: 80px;
`;
export const BackgroundArticle = styled.div`
  position: absolute;
  top: 50%;
  right: -50px;
  transform: translateY(-50%);
  z-index: -2;
`;

export const GroupDotsContainer = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  z-index: -1;
`;
