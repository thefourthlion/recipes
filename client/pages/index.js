import IngredientCostCalc from "../components/IngredientCostCalc";
import AddRecipe from "./AddRecipe";
import ServingCostCalc from "../components/ServingCostCalc";
export default function Home() {
  return (
    <div className="Home">
      <ServingCostCalc />
      <IngredientCostCalc />
      <AddRecipe />
    </div>
  );
}
