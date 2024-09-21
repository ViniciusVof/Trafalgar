import { ReactSVG } from "react-svg";
import { Title } from "../Title";
import {
  Container,
  GroupDotsContainer,
  Information,
  Wrapper,
  WrapperInformation,
} from "./styles";
import GroupDotsIMG from "../../assets/groupDots.svg";
import { ReactNode } from "react";

interface ISectionItem {
  leftIllustration?: string;
  title: string;
  text: string;
  button: ReactNode;
  rightIllustration?: string;
  showGroupDotsBottom?: boolean;
}

export function SectionItem({
  leftIllustration,
  title,
  text,
  button,
  rightIllustration,
  showGroupDotsBottom = false,
}: ISectionItem) {
  return (
    <Wrapper>
      {showGroupDotsBottom && (
        <GroupDotsContainer>
          <ReactSVG src={GroupDotsIMG} />
        </GroupDotsContainer>
      )}
      <Container>
        {leftIllustration && <ReactSVG src={leftIllustration} />}

        <WrapperInformation>
          <Title>{title}</Title>
          <Information>{text}</Information>
          {button && button}
        </WrapperInformation>

        {rightIllustration && <ReactSVG src={rightIllustration} />}
      </Container>
    </Wrapper>
  );
}
