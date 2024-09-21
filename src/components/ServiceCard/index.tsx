import { ReactSVG } from "react-svg";
import { Wrapper } from "./styles";

interface IServiceCard {
  image: string;
  title: string;
  text: string;
}
export function ServiceCard({ image, title, text }: IServiceCard) {
  return (
    <Wrapper>
      <ReactSVG src={image} />
      <h3>{title}</h3>
      <p>{text}</p>
    </Wrapper>
  );
}
