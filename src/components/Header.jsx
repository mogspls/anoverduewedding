import React from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/images/logo.svg"


export default function Header() {
  return (
    <header id="main-header">
      <Link to="/">
        <img src={Logo} alt="AnOverDueWedding" width="20px" id="logo" />
      </Link>
      <nav>
        <ul>
          <li><Link to="/"><p>Details</p></Link></li>
          <li><Link to="/"><p>Attire</p></Link></li>
          <li><Link to="/"><p>Map</p></Link></li>
        </ul>
      </nav>
    </header>
  )
}