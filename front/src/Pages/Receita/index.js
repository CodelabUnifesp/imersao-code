import Button from "../../Components/Button";
import { Container, Row, InfoContainer } from "./styles";
import { receitonas } from "../../Dummy/recipeList";
import { useEffect, useState } from "react";

const Receita = (props) => {
  const [recipe, setReecipe] = useState(null);

  useEffect(() => {
    const recipeById = receitonas.find((item) => {
        debugger;
      return item.id == props.match.params.id;
    });
    setReecipe(recipeById);
  }, []);

  return (
    recipe && (
      <Container>
        <p>
          <b>{recipe.title}</b>
        </p>
        <Row>
          <InfoContainer>
            <label>Ingredientes</label>
            <textarea>
                {recipe.ingredients}
            </textarea>
          </InfoContainer>
          <InfoContainer>
            <label>Modo de Preparo</label>
            <textarea>
                {recipe.preparation}
            </textarea>
          </InfoContainer>
        </Row>
        <Row>
          <Button title="Salvar" />
        </Row>
      </Container>
    )
  );
};

export default Receita;
