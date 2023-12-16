import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container mx-auto relative min-h-[1.5rem] flex flex-col">
      <div className="text-white font-bold text-xl md:text-3xl">Fakelandia J.D.</div>
      <ul className={`gap-4 lg:flex flex-col lg:flex-row ${isMenuOpen ? "flex" : "hidden"}`}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/confession">Confession</NavLink>
        </li>
        <li>
          <NavLink to="/misdemeanour">Misdemeanour</NavLink>
        </li>
      </ul>

      <button
        className="lg:hidden text-white focus:outline-none absolute right-0 top-0"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Nav;
