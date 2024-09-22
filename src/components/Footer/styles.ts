import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 800px;
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.boxedWidth};
  padding: 110px 0px;
  display: flex;
  gap: 145px;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  line-height: 28px;

  max-width: 391px;

  > p {
    margin-top: 17px;
    margin-bottom: 30px;
  }
`;

export const GroupDotsLeft = styled.div`
  position: absolute;
  width: 130px;
  height: 115px;
  bottom: 0;
  left: 0;
  overflow: hidden;
  svg {
    position: absolute;
    bottom: -20px;
    left: -20px;
  }
`;

export const GroupDotsRight = styled.div`
  position: absolute;
  top: -70px;
  right: 90px;
  z-index: -1;
`;
