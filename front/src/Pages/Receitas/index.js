import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import api from '../../Services/api';
import Button from "../../Components/Button";
import Recipe from "../../Components/Recipe";
import {receitonas} from '../../Dummy/recipeList';
import {
  Container,
  RecipesContainer,
  OverlayContainer,
  OverlayContent,
  FieldRow,
} from "./styles.js";

const Receita = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [recipes, setRecipes] = useState(receitonas);

  const openAddNewRecipeModal = () => {
    setModalOpen(true);
  };

  const fetchRecipes = async () => {
    const response = await api.get("/recipes");
    console.log(response);
    await setRecipes(response.data.recipes);
  }

  useEffect(()=>{
    fetchRecipes();
  },[])

  const addNewRecipe = async () => {
    const lastRecipe = receitonas[receitonas.length-1];
    const newId = lastRecipe.id + 1;

    const newRecipe = {
      id: newId,
      title: title,
      ingredients: ingredients,
      preparation: preparation,
      recipes: recipes
    };
    receitonas.push(newRecipe);
    await setRecipes(receitonas);

    alert("Criada");
    setModalOpen(false);
  };

  const deleteRecipe = async (id) => {
    if (window.confirm('Tem certeza que quer deletar essa receita?')) {
      const filteredRecipes = receitonas.filter((recipe) => {
        return recipe.id !== id;
      });
      setRecipes(filteredRecipes);

    } else {
      return;
    }
  };

  const generateRecipes = () => {
    const response = recipes.map((recipe, index) => {
      return (
        <Recipe
          key={index}
          title={recipe.title}
          deleteFunction={() => deleteRecipe(recipe.id)}
          linkPath={`/receitas/${recipe.id}`}
        />
      );
    });

    return response;
  };

  return (
    <Container>
      <Button title="nova +" click={openAddNewRecipeModal} />
      <RecipesContainer>{recipes && generateRecipes()}</RecipesContainer>
      {modalOpen && (
        <OverlayContainer>
          <OverlayContent>
            <FieldRow align="flex-end">
              <FiX onClick={() => setModalOpen(false)} color="#F9A826"></FiX>
            </FieldRow>
            <FieldRow width="50%">
              <span>Título</span>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </FieldRow>
            <FieldRow>
              <span>Ingredientes</span>
              <textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              ></textarea>
            </FieldRow>
            <FieldRow>
              <span>Modo de Preparo</span>
              <textarea
                value={preparation}
                onChange={(e) => setPreparation(e.target.value)}
              ></textarea>
            </FieldRow>
            <FieldRow>
              <Button title="criar" click={addNewRecipe} />
            </FieldRow>
          </OverlayContent>
        </OverlayContainer>
      )}
    </Container>
  );
};

export default Receita;
