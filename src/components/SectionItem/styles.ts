import styled from "styled-components";

export const GroupDotsContainer = styled.div`
  position: absolute;
  bottom: -115px;
  right: -50px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 220px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 120px;
  max-width: ${({ theme }) => theme.boxedWidth};
`;

export const WrapperInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Information = styled.p`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.text};
  line-height: 30px;
  margin-bottom: 10px;
`;
