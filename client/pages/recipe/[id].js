import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Recipe = () => {
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
            {recipe.image != "none" && (
              <img src={recipe.image} alt={`image-for-${recipe.name}`} />
            )}
            <h2>Instructions</h2>
            <h3>{recipe.instructions}</h3>
            <hr />

            <Container>
              <Row>
                <Col>
                  <h2>Ingredients</h2>
                  {ingredients.map((item) => (
                    <h3>{item}</h3>
                  ))}
                </Col>
                <Col>
                  <h2>Amount</h2>
                  {amountOfIngredients.map((item) => (
                    <h3>{item}</h3>
                  ))}
                </Col>
              </Row>
            </Container>

            <h2>Cost</h2>
            <h3>All ingredients combined are - ${recipe.cost}</h3>
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};
export default Recipe;
