import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo";
import Button from "../../components/forms/Button";
import Input from "../../components/forms/input";

import TokenContext from "../../contexts/TokenContext";
import { registerNotas } from "../../services/noteService";
import { getNotas } from "../../services/noteService";
import illustration from "../../assets/notas3.jpg";
import UserContext from "../../contexts/UserContext";
import GridColumn from "../../components/GridColumn";

import "./Note.css";

async function onButtonClick(event) {
    const res = await registerNotas()
    console.log(res);
  }

  
async function onButtonGet(event) {
  const res = await getNotas("10")
  console.log(res);
}
function Note() {
    return (  
        <section className="note1">
        <div className="flex container">
              <div className="boton1">
                <Button onClick={onButtonClick} style="fill">
                  Crear Nueva Nota
                </Button>
                <Button onClick={onButtonGet} style="fill">
                  Ver Notas
                </Button>
              </div>
        </div>
      </section>
    );
}

export default Note