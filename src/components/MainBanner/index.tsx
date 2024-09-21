import { ReactSVG } from "react-svg";
import { Button } from "../Button";
import {
  Container,
  GroupDotsContainer,
  Illustration,
  Informations,
  Wrapper,
} from "./styles";

import Illustration1 from "../../assets/illustration1.svg";
import GroupDots from "../../assets/groupDots.svg";

export function MainBanner() {
  return (
    <Wrapper>
      <GroupDotsContainer>
        <ReactSVG src={GroupDots} />
      </GroupDotsContainer>
      <Container>
        <Informations>
          <h1>Virtual healthcare for you</h1>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>

          <Button>Consult today</Button>
        </Informations>
        <Illustration>
          <ReactSVG src={Illustration1} />
        </Illustration>
      </Container>
    </Wrapper>
  );
}
