import React from "react";
import Button from "../../components/forms/Button";

import "./Home.css";

import illustration from "../../assets/notas.jpg";

import GridColumn from "../../components/GridColumn";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="header">
      <div className="grid container">
        <GridColumn className="headline" column="1 / span 2">
          <div className="main-headline">
            <p className="content">GESTIONA TU TIEMPO</p>
          </div>
          <p className="supp-headline">
            Administra y crea tus notas con <b>DO IT</b>.
          </p>
          <Link to="/register">
            <Button style="fill">Registrarme</Button>
          </Link>
          <Link to="/login">
            <Button style="fill">Iniciar Sesion</Button>
          </Link>
        </GridColumn>

        <GridColumn className="illustration" column="span 3">
          <img src={illustration}></img>
        </GridColumn>
      </div>
    </section>
  );
}

export default Home;
