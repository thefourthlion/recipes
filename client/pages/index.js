import IngredientCostCalc from "../components/IngredientCostCalc";
import AddRecipe from "./AddRecipe";
import ServingCostCalc from "../components/ServingCostCalc";
import Recipes from "./Recipes";
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
