import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import DarkMode from "./DarkMode";

const Navbar = ({ onSearch, darkMode, onToggle }) => {
  return (
    <nav className="navbar">
      <Logo />
      <SearchBar onSearch={onSearch} />
      <DarkMode darkMode={darkMode} onToggle={onToggle} />
    </nav>
  );
};

export default Navbar;