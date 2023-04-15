import React, { useEffect, useState } from "react";
import Axios from "axios";
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getBook();
  }, []);

  const getBook = () => {
    Axios.get("http://localhost:3002/api/recipes/read").then((res) => {
      const data = res.data;
      setRecipes(data);
      console.log(data);
    });
  };
  return (
    <div className="Recipes">
      <div className="container">
        <h1 className="content-header">Recipes</h1>
        {recipes.map((val, key) => {
          return (
            <div>
              <h1>{val.name}</h1>

              <a href={`http://localhost:3000/recipe/${val._id}`}>
                <button className="primary-btn">View Recipe</button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Recipes;
