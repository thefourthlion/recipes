import React, { useEffect, useState } from "react";
import Axios from "axios";
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipe();
  }, []);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const getRecipe = () => {
    Axios.get("https://api.recipes.everettdeleon.com/api/recipes/read").then(
      (res) => {
        const data = res.data;
        setRecipes(data);
        console.log(data);
      }
    );
  };

  const deleteRecipe = (id) => {
    Axios.delete(
      `https://api.recipes.everettdeleon.com/api/recipes/delete/${id}`
    ).then((res) => {
      refreshPage();
    });
  };

  return (
    <div className="Recipes">
      <div className="container">
        <h1 className="content-header">Recipes</h1>
        {recipes.map((val, key) => {
          return (
            <div className="recipe-container">
              <img
                className="recipe-img"
                src={val.image}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <h1 className="recipe-name">{val.name}</h1>

              <a href={`/recipe/${val._id}`}>
                <button className="third-btn">View Recipe</button>
              </a>

              <div>
                <br />
                <button
                  onClick={() => {
                    deleteRecipe(val._id);
                  }}
                  className="secondary-btn"
                >
                  Delete Recipe
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Recipes;
