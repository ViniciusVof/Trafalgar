import { Title } from "../Title";
import {
  BackgroundArticle,
  Container,
  GroupDotsContainer,
  Wrapper,
} from "./styles";
import { ReactSVG } from "react-svg";

import BackgroundArticlesIMG from "../../assets/backgroundArticles.svg";
import GroupDotsIMG from "../../assets/groupDots.svg";
import { ArticleCard } from "../ArticleCard";
import { Button } from "../Button";

export function LatestArticles() {
  return (
    <Wrapper>
      <Title centralized>Check out our latest article</Title>
      <Container>
        <GroupDotsContainer>
          <ReactSVG src={GroupDotsIMG} />
        </GroupDotsContainer>
        <ArticleCard
          image="/articles/image1.png"
          title="Disease detection, check up in the laboratory"
          text="In this case, the role of the health laboratory is very important to
          do a disease detection..."
        />
        <ArticleCard
          image="/articles/image2.png"
          title="Herbal medicines that are safe for consumption"
          text="Herbal medicine is very widely used at this time because of its very good for your health..."
        />
        <ArticleCard
          image="/articles/image3.png"
          title="Natural care for healthy facial skin"
          text="A healthy lifestyle should start from now and also for your skin health. There are some..."
        />
      </Container>

      <Button variant="secondary">View all</Button>
      <BackgroundArticle>
        <ReactSVG src={BackgroundArticlesIMG} />
      </BackgroundArticle>
    </Wrapper>
  );
}
