import styled from "styled-components";

interface IWrapper {
  centralized: boolean;
}

export const Wrapper = styled.h2<IWrapper>`
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.title};
  position: relative;

  text-align: ${({ centralized }) => centralized && "center"};

  &::after {
    content: "";
    position: absolute;
    bottom: -26px;
    left: ${({ centralized }) => (centralized ? "50%" : 0)};
    transform: ${({ centralized }) => (centralized ? "translateX(-50%)" : 0)};
    width: 56px;
    height: 2px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.title};
  }

  margin-bottom: 56px;
`;
