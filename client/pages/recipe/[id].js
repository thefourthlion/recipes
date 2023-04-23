import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useUserAuth } from "../../context/UserAuthContext";

const Recipe = () => {
  const { user } = useUserAuth();
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [amountOfIngredients, setAmountOfIngredients] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const findRecipe = () => {
    Axios.get(
      `https://api.recipes.everettdeleon.com/api/recipes/read/${id}`
    ).then((res) => {
      const data = res.data;

      setRecipe(data);
      setIngredients(data.ingredients);
      setAmountOfIngredients(data.amount);
    });
  };

  const deleteRecipe = () => {
    Axios.delete(
      `https://api.recipes.everettdeleon.com/api/recipes/delete/${id}`
    ).then((res) => {
      refreshPage();
    });
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    findRecipe();
  }, [id]);

  return (
    <div className="Recipe">
      <div className="container">
        {recipe != [] ? (
          <div>
            <h1>{recipe.name}</h1>
            <hr />

            <h2 className="instructions-header">Instructions</h2>
            <h3 className="instructions">{recipe.instructions}</h3>

            {recipe.image != "none" && (
              <img
                className="recipe-img"
                src={recipe.image}
                alt={`image-for-${recipe.name}`}
              />
            )}
          </div>
        ) : (
          "Loading..."
        )}

        <Container className="ing-list">
          <Row>
            <Col>
              <h2 className="header">Ingredients</h2>
              {ingredients.map((item) => (
                <h3>{item}</h3>
              ))}
            </Col>
            <Col>
              <h2 className="header">Amount</h2>
              {amountOfIngredients.map((item) => (
                <h3>{item}</h3>
              ))}
            </Col>
          </Row>
        </Container>

        <h2 className="header">Cost</h2>
        <h3>All ingredients - ${recipe.cost}</h3>
        <h3>Serving Cost - ${recipe.servingCost}</h3>

        {user && (
          <button
            className="secondary-btn"
            onClick={() => {
              deleteRecipe();
            }}
          >
            Delete Recipe
          </button>
        )}
      </div>
    </div>
  );
};
export default Recipe;
