import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Axios from "axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const food = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [grams, setGrams] = useState(0);

  const [foodName, setFoodName] = useState("");
  const [foodNutrients, setFoodNutrients] = useState([]);

  const [fats, setFats] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);

  const getSearchResults = () => {
    Axios.get(
      `http://localhost:3002/api/foundationalFood1/name/${searchTerm}`
    ).then((res) => {
      const data = res.data;
      setSearchResults(data);
      console.log(data);

      console.log(data[0].description);

      //   const fiber = nutrition.filter(
      //     (item) => item.nutrient.name == "Fiber, total dietary"
      //   );

      //   if (fiber.length > 0) {
      //     // nutrition name
      //     console.log(fiber[0].nutrient.name);
      //     // nutrition amount
      //     console.log(fiber[0].amount);

      //     console.log("");
      //   }

      //   const saturatedFat = nutrition.filter(
      //     (item) => item.nutrient.name == "Fatty acids, total saturated"
      //   );

      //   if (saturatedFat.length > 0) {
      //     // nutrition name
      //     console.log(saturatedFat[0].nutrient.name);
      //     // nutrition amount
      //     console.log(saturatedFat[0].amount);

      //     console.log("");
      //   }

      //   const monounsaturatedFat = nutrition.filter(
      //     (item) => item.nutrient.name == "Fatty acids, total monounsaturated"
      //   );

      //   if (monounsaturatedFat.length > 0) {
      //     // nutrition name
      //     console.log(monounsaturatedFat[0].nutrient.name);
      //     // nutrition amount
      //     console.log(monounsaturatedFat[0].amount);

      //     console.log("");
      //   }

      //   const polyunsaturatedFat = nutrition.filter(
      //     (item) => item.nutrient.name == "Fatty acids, total polyunsaturated"
      //   );

      //   if (polyunsaturatedFat.length > 0) {
      //     // nutrition name
      //     console.log(polyunsaturatedFat[0].nutrient.name);
      //     // nutrition amount
      //     console.log(polyunsaturatedFat[0].amount);
      //   }
    });
  };

  const setNutritionValues = (foodNum, grams) => {
    Axios.get(
      `http://localhost:3002/api/foundationalFood1/name/${searchTerm}`
    ).then((res) => {
      const data = res.data;
      setSearchResults(data);
      console.log(data);

      console.log(data[foodNum].description);

      const nutrition = data[foodNum].foodNutrients;

      const water = nutrition.filter((item) => item.nutrient.name == "Water");

      if (water.length > 0) {
        // nutrition name
        console.log(water[0].nutrient.name);
        // nutrition amount
        console.log(water[0].amount);

        console.log("");
      }

      const itemProtein = nutrition.filter(
        (item) => item.nutrient.name == "Protein"
      );

      if (itemProtein.length > 0) {
        // nutrition name
        console.log(itemProtein[0].nutrient.name);
        // nutrition amount
        console.log(itemProtein[0].amount);

        console.log("");

        setProtein(protein + (itemProtein[0].amount / 100) * grams);
      }

      const itemCarbs = nutrition.filter(
        (item) => item.nutrient.name == "Carbohydrate, by difference"
      );

      if (itemCarbs.length > 0) {
        // nutrition name
        console.log(itemCarbs[0].nutrient.name);
        // nutrition amount
        console.log(itemCarbs[0].amount);

        console.log("");

        setCarbs(carbs + (itemCarbs[0].amount / 100) * grams);
      }

      const itemFat = nutrition.filter(
        (item) => item.nutrient.name == "Total lipid (fat)"
      );

      if (itemFat.length > 0) {
        // nutrition name
        console.log(itemFat[0].nutrient.name);
        // nutrition amount
        console.log(itemFat[0].amount);

        console.log("");

        setFats(fats + (itemFat[0].amount / 100) * grams);
      }
    });
  };

  const getFoodInfo = () => {
    alert(foodName);
    console.log(foodNutrients);
  };

  return (
    <div className="Food">
      <Container>
        <h1 className="content-header">Search Ingredient</h1>
        <FloatingLabel
          className="search-bar search-input-label"
          label="Search Ingredient"
        >
          <Form.Control
            className="search-input-form-control search-input"
            type="text"
            placeholder="Search Ingredient"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          ></Form.Control>
        </FloatingLabel>

        <br />

        <FloatingLabel className="search-bar search-input-label" label="Grams">
          <Form.Control
            className="search-input-form-control search-input"
            type="text"
            placeholder="Grams"
            onChange={(e) => {
              setGrams(e.target.value);
            }}
          ></Form.Control>
        </FloatingLabel>

        <br />

        <button
          onClick={() => {
            getSearchResults();
          }}
          className="search-btn primary-btn"
        >
          Search
        </button>
      </Container>

      <br />

      <Container fluid="md" className="ingredient-container">
        {searchResults.map((val, key) => {
          return (
            <>
              <button
                className="search-btn secondary-btn"
                onClick={() => {
                  setNutritionValues(key, grams);
                }}
              >
                {val.description}
              </button>
              <br />
              <br />
            </>
          );
        })}
      </Container>

      <h1>Carbs : {carbs}</h1>
      <h1>fats : {fats}</h1>
      <h1>protein : {protein}</h1>
    </div>
  );
};

export default food;
