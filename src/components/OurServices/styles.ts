import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const BackgroundService = styled.div`
  position: absolute;
  top: 198px;
  left: 0px;
  z-index: -1;
`;

export const Information = styled.p`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.text};
  line-height: 30px;
  text-align: center;
  padding: 0px 325px 80px 325px;
`;
export const ServicesContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 34px;
  row-gap: 37px;
  margin-bottom: 69px;
`;

export const GroupDotsContainer = styled.div`
  position: absolute;
  top: 50%;
  right: -50px;
  transform: translateY(-50%);
  z-index: -2;
`;
