import Button from "../../Components/Button";
import { Container, Row, InfoContainer } from "./styles";
import { useEffect, useState } from "react";
import api from "../../Services/api";

const Receita = (props) => {
  const [recipe, setReecipe] = useState(null);
  const [recipeTitle, setRecipeTitle] = useState(null);
  const [recipeIngredients, setRecipeIngredients] = useState(null);
  const [recipePreparation, setRecipePreparation] = useState(null);

  const fetchData = async () => {
    const response = await api.get(`/recipes/${props.match.params.id}`);
    await setReecipe(response.data);

    const { title, ingredients, preparation } = response.data;

    await setRecipeTitle(title);
    await setRecipeIngredients(ingredients);
    await setRecipePreparation(preparation);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const editRecipe = async () => {
    const requestBody = {
      title: recipeTitle,
      ingredients: recipeIngredients,
      preparation: recipePreparation,
    };
    await api.put(`/recipes/${props.match.params.id}`, requestBody);
    alert("Receita editada!");
  };

  return (
    recipeTitle &&
    recipeIngredients &&
    recipePreparation && (
      <Container>
        <p>
          <b>{recipeTitle}</b>
        </p>
        <Row>
          <InfoContainer>
            <label>Ingredientes</label>
            <textarea
              value={recipeIngredients}
              onChange={(e) => setRecipeIngredients(e.target.value)}
            >
              {recipeIngredients}
            </textarea>
          </InfoContainer>
          <InfoContainer>
            <label>Modo de Preparo</label>
            <textarea
              value={recipePreparation}
              onChange={(e) => setRecipePreparation(e.target.value)}
            >
              {recipePreparation}
            </textarea>
          </InfoContainer>
        </Row>
        <Row>
          <Button title="Salvar" click={editRecipe} />
        </Row>
      </Container>
    )
  );
};

export default Receita;
