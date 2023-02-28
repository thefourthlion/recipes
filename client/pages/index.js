import SearchIngredient from "../components/SearchIngredient";
import CostCalculator from "../components/costCalculator";
export default function Home() {
  return (
    <div className="Home">
      <SearchIngredient />
      <CostCalculator />
    </div>
  );
}
