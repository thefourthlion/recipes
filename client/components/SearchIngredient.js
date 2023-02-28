import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Axios from "axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Ingredients from "./Ingredients";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
const SearchIngredient = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchId, setSearchId] = useState("");
  const [pageSize, setPageSize] = useState(12);
  const [pageNumber, setPageNumber] = useState("");
  const foodUrl = `https://api.nal.usda.gov/fdc/v1/food/`;

  const Ingredients = ({ name, brandName, id, additionalDescriptions }) => {
    return (
      <div className="Ingredients">
        <div className="container">
          <h4 className="content-header">
            {brandName} {brandName != undefined && "-"} {name}
            {console.log(brandName)}
            <span
              className="add-btn"
              onClick={() => {
                setSearchId(id)
                  .then(searchFoodItem())
                  .then(setSearchResults([]));
              }}
            >
              +
            </span>
          </h4>
        </div>
      </div>
    );
  };

  const getSearchResults = () => {
    Axios.get(
      `https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchTerm}&pageSize=${pageSize}&api_key=W6esAlkr0u65cu999eiQXdgT7pKzhj4c9MoZbHFP`
    ).then((res) => {
      const data = res.data;
      let foods = data.foods;
      let foodNames = foods.forEach((element) =>
        console.log(element.description)
      );
      // let nutrients = foods[0].foodNutrients;
      // console.log(data);
      // console.log(foods[0].fdcId);
      // console.log(foodNames);
      // console.log(nutrients);
      setSearchResults(data.foods);
    });
  };

  const searchFoodItem = () => {
    Axios.get(
      `https://api.nal.usda.gov/fdc/v1/food/${searchId}?api_key=W6esAlkr0u65cu999eiQXdgT7pKzhj4c9MoZbHFP`
    ).then((res) => {
      const data = res.data;
      console.log(data);
    });
  };

  return (
    <div className="SearchIngredient">
      <div className="container">
        <h1 className="content-header">Search Ingredient</h1>

        <FloatingLabel className="search-input-label" label="Search Books">
          <Form.Control
            className="search-input-form-control search-input"
            type="text"
            placeholder="Search Books"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          ></Form.Control>
        </FloatingLabel>

        <button
          onClick={() => {
            getSearchResults();
          }}
          className="primary-btn"
        >
          Search
        </button>

        <Container fluid="md" className="ingredient-container">
          <Row>
            {searchResults.map((val) => {
              return (
                <Col>
                  <Ingredients
                    name={val.description}
                    brandName={val.brandName}
                    id={val.fdcId}
                    additionalDescriptions={val.additionalDescriptions}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
        <button
          onClick={() => {
            setPageSize(pageSize + 12);
            getSearchResults();
          }}
          className="primary-btn"
        >
          View More
        </button>
      </div>
    </div>
  );
};
export default SearchIngredient;
