import AddRecipe from "./add-recipe";

import Recipes from "./view-recipes";
export default function Home() {
  return (
    <div className="Home">
      <AddRecipe />

      <Recipes />
    </div>
  );
}
