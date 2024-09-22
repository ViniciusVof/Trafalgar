import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  height: 512px;
  width: 350px;

  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);

  background-color: ${({ theme }) => theme.white};

  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 240px;

  img {
    border-radius: 20px 20px 0px 0px;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ArticleContainer = styled.div`
  padding: 24px 33px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 32px;
  font-size: 21px;
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.text};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: 28px;
  font-size: 16px;
`;

export const ReadMore = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  cursor: pointer;

  padding: 0px 33px 33px 33px;
  color: ${({ theme }) => theme.secondary};
`;
