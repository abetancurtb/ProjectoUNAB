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
