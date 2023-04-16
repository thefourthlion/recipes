import "../styles/Login.scss";import "../styles/Navbar.scss";
import "../styles/Footer.scss";
import "../styles/ServingCostCalc.scss";
import "../styles/IngredientCostCalc.scss";
import "../styles/EditRecipes.scss";
import "../styles/EditRecipe.scss";
import "../styles/Recipe.scss";
import "../styles/Recipes.scss";
import "../styles/AddRecipe.scss";
import "../styles/index.scss";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserAuthContextProvider } from "../context/UserAuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserAuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </UserAuthContextProvider>
  );
}
export default MyApp;
