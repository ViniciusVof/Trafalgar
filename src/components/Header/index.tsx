import { ReactSVG } from "react-svg";
import { Container, Menu, MenuItem, Wrapper } from "./styles";

import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <Wrapper>
      <Container>
        <ReactSVG src={Logo} />
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Find a doctor</MenuItem>
          <MenuItem>Apps</MenuItem>
          <MenuItem>Testimonials</MenuItem>
          <MenuItem>About us</MenuItem>
        </Menu>
      </Container>
    </Wrapper>
  );
}
