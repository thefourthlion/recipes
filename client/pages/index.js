import IngredientCostCalc from "../components/IngredientCostCalc";
import AddRecipe from "./add-recipe";
import ServingCostCalc from "../components/ServingCostCalc";
import Recipes from "./view-recipes";
export default function Home() {
  return (
    <div className="Home">
      <AddRecipe />
      <hr />
      <ServingCostCalc />
      <IngredientCostCalc />
      <hr />
      <Recipes />
    </div>
  );
}
