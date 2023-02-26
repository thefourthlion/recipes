import React from "react";
const Ingredients = ({ name, id }) => {
  return (
    <div className="Ingredients">
      <div className="container">
        <h1 className="content-header">{name}</h1>
        <button
          className="primary-btn"
          onClick={() => {
            console.log(id);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default Ingredients;
