import { Wrapper } from "./styles";

interface MenuItem {
  title: string;
  link: string;
}

interface IMenuFooter {
  title: string;
  menuItems: MenuItem[];
}
export function MenuFooter({ title, menuItems }: IMenuFooter) {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <nav>
        {menuItems.map(({ title, link }) => (
          <a href={link}>{title}</a>
        ))}
      </nav>
    </Wrapper>
  );
}
