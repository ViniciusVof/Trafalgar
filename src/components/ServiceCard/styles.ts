import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  height: 354px;
  width: 350px;
  padding: 58px 52px 47px 36px;

  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);

  background-color: ${({ theme }) => theme.white};

  svg {
    margin-bottom: 30px;
  }

  h3 {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.black};
  }

  p {
    line-height: 28px;
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.text};
  }
`;
