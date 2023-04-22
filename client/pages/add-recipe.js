import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ServingCostCalc from "../components/ServingCostCalc";
import IngredientCostCalc from "../components/IngredientCostCalc";
const AddRecipe = () => {
  // Declaring and initializing state variables using the useState hook
  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientCosts, setIngredientCosts] = useState([]);
  const [amountOfIngredients, setAmountOfIngredients] = useState([]);
  const [servingCost, setServingCost] = useState(0);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [currentAmount, setCurrentAmount] = useState("");
  const [currentCost, setCurrentCost] = useState();
  const [totalCostRounded, setTotalCostRounded] = useState();
  const [showCalculators, setShowCalculators] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);

  let totalCost = 0;

  // Getting the current date and time using the toLocaleDateString method
  const date = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  // Function to refresh the page
  const refreshPage = () => {
    window.location.reload(false);
  };

  // Function to clear the input fields
  const handleClearInput = () => {
    setCurrentIngredient("");
    setCurrentAmount("");
    setCurrentCost(0);
  };

  // Function to send the recipe to the server
  const sendRecipeToDb = () => {
    Axios.post("https://api.recipes.everettdeleon.com/api/recipes/create", {
      name: name,
      Instructions: instructions,
      ingredients: ingredients,
      amount: amountOfIngredients,
      cost: totalCostRounded,
      image: image,
      servingCost: servingCost,
      timestamp: date,
    }).then(() => {
      refreshPage();
    });
  };

  return (
    <div className="AddRecipe">
      <div className="container">
        <h1 className="content-header">Recipe Information</h1>
        {/* // form for adding name, instructions, and image to recipe */}
        <FloatingLabel
          className="search-input-label recipe-inputs"
          label="Recipe Name"
        >
          <Form.Control
            className="search-input-form-control search-input"
            type="text"
            placeholder="Recipe Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></Form.Control>
        </FloatingLabel>
        <FloatingLabel
          className="search-input-label recipe-inputs"
          label="Image Link"
        >
          <Form.Control
            className="search-input-form-control search-input"
            type="text"
            placeholder="Image Link"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          ></Form.Control>
        </FloatingLabel>
        <FloatingLabel
          className="search-input-label recipe-inputs"
          label="Recipe Instructions"
        >
          <Form.Control
            className="search-input-form-control search-input"
            as="textarea"
            placeholder="Recipe Instructions"
            style={{ height: "100px" }}
            onChange={(e) => {
              setInstructions(e.target.value);
            }}
          />
        </FloatingLabel>
        {/* <Container className="ingredient-container"> */}
        {/* // form for adding ingredients to the recipe  */}
        <h1>Add An Ingredient</h1>
        <Row>
          <Col className="ing-inputs" md>
            <FloatingLabel className="search-input-label" label="Ingredient">
              <Form.Control
                className="search-input-form-control search-input"
                type="text"
                placeholder="Ingredient"
                value={currentIngredient}
                onChange={(e) => {
                  setCurrentIngredient(e.target.value);
                }}
              ></Form.Control>
            </FloatingLabel>
          </Col>
          <Col className="ing-inputs" md>
            <FloatingLabel className="search-input-label" label="Amount">
              <Form.Control
                className="search-input-form-control search-input"
                type="text"
                placeholder="Amount"
                value={currentAmount}
                onChange={(e) => {
                  setCurrentAmount(e.target.value);
                }}
              ></Form.Control>
            </FloatingLabel>
          </Col>
          <Col className="ing-inputs" md>
            <FloatingLabel className="search-input-label" label="Cost $">
              <Form.Control
                className="search-input-form-control search-input"
                type="text"
                placeholder="Cost $"
                value={currentCost}
                onChange={(e) => {
                  setCurrentCost(e.target.value);
                }}
              ></Form.Control>
            </FloatingLabel>
          </Col>
        </Row>
        {/* </Container> */}
        {/* // If there are ingredients, show them */}
        {ingredients.length > 0 && (
          <Container>
            <Row>
              <h1>{name} recipe</h1>
            </Row>

            <Row>
              <h1>{instructions}</h1>
            </Row>
            <Row>
              <Col>
                <h1>Ingredients</h1>
                {ingredients.map((val) => (
                  <h3>{val}</h3>
                ))}
              </Col>
              <Col>
                <h1>Amount</h1>
                {amountOfIngredients.map((val) => (
                  <h3>{val}</h3>
                ))}
              </Col>
              <Col>
                <h1>Cost</h1>
                {ingredientCosts.map((val) => (
                  <h3>${val}</h3>
                ))}
              </Col>
            </Row>
            <Row>
              <img src={image} className="recipe-img" />
            </Row>
          </Container>
        )}

        {/* // if user filled out the input fields allow user to submit data */}
        {(currentAmount != "") & (currentIngredient != "") ? (
          <div>
            <button
              className="primary-btn submit-btn"
              onClick={() => {
                setIngredientCosts([
                  ...ingredientCosts,
                  parseFloat(currentCost),
                ]);
                setAmountOfIngredients([...amountOfIngredients, currentAmount]);
                setIngredients([...ingredients, currentIngredient]);
                handleClearInput();
              }}
            >
              + Ingredient
            </button>
            <br />
          </div>
        ) : (
          ""
        )}

        {/* // if user added cost, allow user to calculate the total */}
        {ingredientCosts.length > 0 ? (
          <div>
            <button
              className="primary-btn submit-btn"
              onClick={() => {
                for (var i = 0; i < ingredientCosts.length; i++) {
                  totalCost = totalCost + ingredientCosts[i];

                  setTotalCostRounded(totalCost.toFixed(2));
                }
              }}
            >
              Calc Total Cost
            </button>

            <br />
          </div>
        ) : (
          ""
        )}
        {/* // if user calc cost, show them the total */}
        {totalCostRounded != undefined && (
          <h1>Recipe's Total Cost = ${totalCostRounded}</h1>
        )}
        {/* // if there is at least one ingredient and amount, allow them to submit recipe*/}

        {(ingredients.length > 0) & (amountOfIngredients.length > 0) ? (
          <div>
            <button
              className="primary-btn submit-btn"
              onClick={() => {
                sendRecipeToDb();
              }}
            >
              Submit Recipe
            </button>
            <br />
          </div>
        ) : (
          ""
        )}

        <button
          className="secondary-btn show-calc-btn"
          onClick={() => {
            setShowCalculators(!showCalculators);
          }}
        >
          Show Calculators
        </button>

        {showCalculators && (
          <div>
            <ServingCostCalc />
            <IngredientCostCalc />
          </div>
        )}
      </div>
    </div>
  );
};
export default AddRecipe;
