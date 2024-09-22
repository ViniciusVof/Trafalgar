import { ReactSVG } from "react-svg";
import {
  ArticleContainer,
  Content,
  Title,
  ImageContainer,
  ReadMore,
  Wrapper,
} from "./styles";

import ReadMoreSVG from "../../assets/readMoreArrow.svg";

interface IArticleCard {
  image: string;
  title: string;
  text: string;
}
export function ArticleCard({ image, title, text }: IArticleCard) {
  return (
    <Wrapper>
      <ImageContainer>
        <img src={image} />
      </ImageContainer>
      <ArticleContainer>
        <Title>{title}</Title>
        <Content>{text}</Content>
      </ArticleContainer>
      <ReadMore>
        Read more <ReactSVG src={ReadMoreSVG} />
      </ReadMore>
    </Wrapper>
  );
}
