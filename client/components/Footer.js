import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="Footer phone-none">
      <div className="container">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/add-recipe">Add Recipe</Link>
        </li>
        <li>
          <Link href="/view-recipes">View Recipes</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </div>
    </div>
  );
};
export default Footer;
