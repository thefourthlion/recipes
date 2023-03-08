import React, { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="Navbar" id="Navbar">
      <ul
        className="nav nav-links"
        id={showLinks ? "nav-active" : "nav-hidden"}
      >
        <li className="nav-item">
          <Link href="/recipes">Recipes</Link>
        </li>

        <li className="nav-item">
          <Link href="/create-recipe">Create Recipe</Link>
        </li>
      </ul>

      <div className="burger" onClick={() => setShowLinks(!showLinks)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
};
export default Navbar;
