import React, { useEffect, useState } from "react";
import Axios from "axios";
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = () => {
    Axios.get("https://api.recipes.everettdeleon.com/api/recipes/read").then(
      (res) => {
        const data = res.data;
        setRecipes(data);
        console.log(data);
      }
    );
  };

  return (
    <div className="Recipes">
      <div className="container">
        <h1 className="content-header">Recipes</h1>
        {recipes.map((val, key) => {
          return (
            <div>
              <h1>{val.name}</h1>

              <a href={`/recipe/${val._id}`}>
                <button className="third-btn">View Recipe</button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Recipes;
