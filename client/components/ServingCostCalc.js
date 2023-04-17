import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
const ServingCostCalc = () => {
  const [servings, setServings] = useState();
  const [totalCost, setTotalCost] = useState();
  const [servingCost, setServingCost] = useState();

  const calcServingCost = () => {
    let costPerServing = totalCost / servings;
    costPerServing = costPerServing.toFixed(2);
    setServingCost(costPerServing);
    alert(`Cost per serving = ${costPerServing}`);
  };

  return (
    <div className="ServingCostCalc">
      <div className="container">
        <h1 className="content-header">ServingCostCalc</h1>
        <Row>
          <Col className="ing-inputs" md>
            <FloatingLabel className="search-input-label" label="Servings #">
              <Form.Control
                className="search-input-form-control search-input"
                type="text"
                placeholder="Servings #"
                onChange={(e) => {
                  setServings(e.target.value);
                }}
              ></Form.Control>
            </FloatingLabel>
          </Col>
          <Col className="ing-inputs" md>
            <FloatingLabel className="search-input-label" label="Total Cost $">
              <Form.Control
                className="search-input-form-control search-input"
                type="text"
                placeholder="Total Cost $"
                onChange={(e) => {
                  setTotalCost(e.target.value);
                }}
              ></Form.Control>
            </FloatingLabel>
          </Col>

          <Col className="ing-inputs" md>
            <FloatingLabel
              className="search-input-label"
              label="Serving Cost $"
            >
              <Form.Control
                className="search-input-form-control search-input"
                type="text"
                placeholder="Serving Cost $"
                value={servingCost}
              ></Form.Control>
            </FloatingLabel>
          </Col>
          <Col className="ing-inputs" md>
            <button
              onClick={() => {
                calcServingCost();
              }}
              className="primary-btn"
            >
              Calculate
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default ServingCostCalc;
