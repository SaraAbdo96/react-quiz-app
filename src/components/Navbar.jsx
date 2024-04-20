import React from "react";
import logo from "/images/logo.png";
const Navbar = () => {
  return (
    <header className="h-16 shadow-sm flex items-center">
      <nav className="flex justify-between items-center w-9/12 mx-auto">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className="flex items-center space-x-5">
          <ul className="sm:flex items-center space-x-5 hidden">
            <li>
              <a href="/">How it works?</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
          </ul>
          <button className="font-medium px-5 py-1 border border-primary rounded">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
