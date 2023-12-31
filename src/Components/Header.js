import React from "react";
import Logo from "../assets/icons/main_logo_with_darktext_dphi1.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to="/" className="linksclass">
        <img src={Logo} alt="Logoimage" />
      </Link>
    </header>
  );
};

export default Header;
