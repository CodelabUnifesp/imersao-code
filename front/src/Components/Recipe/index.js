import { Link } from "react-router-dom";
import { FiTrash, FiChevronRight, FiBookmark } from "react-icons/fi";
import { Container, IconsContainer } from "./styles";

const Recipe = (props) => {
  const { title, deleteFunction, linkPath } = props;

  return (
    <Container>
      <FiBookmark />
      <span>{title}</span>
      <IconsContainer>
        <FiTrash onClick={deleteFunction} />
        <Link to={linkPath}>
          <FiChevronRight />
        </Link>
      </IconsContainer>
    </Container>
  );
};
export default Recipe;
