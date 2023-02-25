import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Axios from "axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const SearchIngredient = () => {
  const [searchResults, setSearchResults] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const getSearchResults = Axios.get(`${searchTerm}`).then((res) => {
    const data = res.data;
    console.log(data);
    setSearchResults(data);
  });

  return (
    <div className="SearchIngredient">
      <div className="container">
        <h1 className="content-header">Search Ingredient</h1>
        <Form>
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
          <button className="primary-btn">Search</button>
        </Form>
      </div>
    </div>
  );
};
export default SearchIngredient;
