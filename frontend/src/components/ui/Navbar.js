import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/Logo";
import Button from "../forms/Button";

import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="menu flex container">
          <Link to="//www.facebook.com/zapatillasscorpion154" align="center">
            <div class="br">
              <img src="https://res.cloudinary.com/db8koqsxz/image/upload/v1671684802/facebook_guom54.png"></img>
            </div>
          </Link>
          <Link to="//www.instagram.com/zapatillasscorpion154/">
            <div class="bbr">
              <img src="https://res.cloudinary.com/db8koqsxz/image/upload/v1671799517/instagram_caimst.png"></img>
            </div>
          </Link>
          <li class="ellogo">
            <Link to="/">
              <Logo size="40px" showText={true} />
            </Link>
          </li>

          {/* <li><Link to="/">Inicio</Link></li> */}
          {/* <li><Link to="/about">Nosotros</Link></li> */}

          <li class="botondeinicio">
            <Link to="/login">
              <Button style="fill">Inicia Sesion</Button>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet></Outlet>
    </>
  );
}

export default Navbar;
