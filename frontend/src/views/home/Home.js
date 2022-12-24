import React from "react";
import Button from "../../components/forms/Button";

import "./Home.css";

import illustration from "../../assets/notas.jpg";

import GridColumn from "../../components/GridColumn";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex header">
      <div>
        <div align="center">
          <GridColumn className="headline">Gestiona Tu Tiempo</GridColumn>
        </div>
        <h2 className="supp-headline" align="center">
          Aprende a trabajar con tu tiempo,
          <div align="center">no contra el...</div>
          <div>Con</div>
          <div>
            <b align="center">... Do-ItApp ...</b>
          </div>
        </h2>
        <div align="center">
          <Link to="/register">
            <Button style="fill">Registrarse</Button>
          </Link>
        </div>
        <div className="message" align="center">
          click aqui para registrarse
        </div>

        <div>
          <Link to="//www.apple.com/co/app-store/">
            <img
              class="macStrore"
              height="53"
              width="170"
              src="https://res.cloudinary.com/db8koqsxz/image/upload/v1671754715/kisspng-app-store-apple-download-logo-app-store-5b500d98b7efd5.2471397315319730167534_gbg7pi.png"
            ></img>
          </Link>

          <Link to="//apps.microsoft.com/store/apps?hl=es-co&gl=co">
            <img
              class="windowsStrore"
              height="120"
              width="200"
              src="https://res.cloudinary.com/db8koqsxz/image/upload/v1671755692/kisspng-microsoft-store-windows-10-android-app-store-logo-5b46fe0b6b4ed7.7289881115313792114395_wfvujr.png"
            ></img>
          </Link>
        </div>
      </div>
      <GridColumn className="illustration">
        <img height="555" width="828" src={illustration}></img>
      </GridColumn>
    </section>
  );
}

export default Home;

