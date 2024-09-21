import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 190px;
  p {
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.text};
    line-height: 30px;
    text-align: center;
    padding: 0px 85px 80px 83px;
  }
`;
