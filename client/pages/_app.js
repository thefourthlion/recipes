import "../styles/Nutrients.scss";
import "../styles/Recipe.scss";
import "../styles/Navbar.scss";
import "../styles/Footer.scss";
import "../styles/CostCalculator.scss";
import "../styles/Ingredients.scss";
import "../styles/SearchIngredient.scss";
import "../styles/globals.scss";
import "../styles/index.scss";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
