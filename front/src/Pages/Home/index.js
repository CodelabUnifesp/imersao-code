import { Container, Img, P } from "./styles";
import chefPath from "../../Assets/Chef.svg";

const Home = () => {
  return (
    <Container>
      <P>Code <br/> Recipe</P>
      <Img src={chefPath} alt="chef"></Img>
    </Container>
  );
};

export default Home;
