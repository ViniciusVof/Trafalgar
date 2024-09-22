import {
  Container,
  GroupDotsLeft,
  GroupDotsRight,
  Information,
  Wrapper,
} from "./styles";

import LogoWhiteIMG from "../../assets/logoWhite.svg";
import GroupDotsIMG from "../../assets/groupDots.svg";

import { ReactSVG } from "react-svg";
import { MenuFooter } from "../MenuFooter";

export function Footer() {
  return (
    <Wrapper>
      <GroupDotsLeft>
        <ReactSVG src={GroupDotsIMG} />
      </GroupDotsLeft>
      <Container>
        <Information>
          <ReactSVG src={LogoWhiteIMG} />

          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>

          <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
        </Information>
        <MenuFooter
          title="Company"
          menuItems={[
            {
              title: "About",
              link: "#",
            },
            {
              title: "Testimonials",
              link: "#",
            },
            {
              title: "Find a doctor",
              link: "#",
            },
            {
              title: "Apps",
              link: "#",
            },
          ]}
        />

        <MenuFooter
          title="Region"
          menuItems={[
            {
              title: "Indonesia",
              link: "#",
            },
            {
              title: "Singapore",
              link: "#",
            },
            {
              title: "Hongkong",
              link: "#",
            },
            {
              title: "Canada",
              link: "#",
            },
          ]}
        />

        <MenuFooter
          title="Help"
          menuItems={[
            {
              title: "Help center",
              link: "#",
            },
            {
              title: "Contact support",
              link: "#",
            },
            {
              title: "Instructions",
              link: "#",
            },
            {
              title: "How it works",
              link: "#",
            },
          ]}
        />
      </Container>
      <GroupDotsRight>
        <ReactSVG src={GroupDotsIMG} />
      </GroupDotsRight>
    </Wrapper>
  );
}
