import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar" id="Navbar">
      <ul
        className="nav nav-links"
        id={showLinks ? "nav-active" : "nav-hidden"}
      >
        <li className="nav-item">
          <Link href="/" className="phone-none">
            Home
          </Link>
        </li>

        <li className="nav-item pc-none">
          <Link href="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link href="/add-recipe">Add Recipe</Link>
        </li>
        <li className="nav-item">
          <Link href="/view-recipes">View Recipes</Link>
        </li>

        <li>
          <Link className="login-link" href="/login">
            <button className="primary-btn">Login</button>
          </Link>
        </li>
      </ul>

      <Link href="/" className="pc-none phone-header">
        <h1>Everett's Recipes</h1>
      </Link>

      <div className="burger" onClick={() => setShowLinks(!showLinks)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}
