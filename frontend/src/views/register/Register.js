import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import Button from "../../components/forms/Button";
import Input from "../../components/forms/input";
import { register } from "../../services/AuthService";

import "./Register.css";

function Login() {
  const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  async function onButtonClick(event) {
    event.preventDefault();

    if (passwordInput != confirmPasswordInput) {
      return alert("las contraseñas no coinciden");
    }

    const res = await register(userInput, passwordInput,emailInput);
    console.log(res);
  }

  return (
    <section className="login">
      <div className="container">
        <Link to="/">
          <Logo size="5%" showText={false} />
        </Link>
        <h1 className="title">
          Registrarse en <b>DO IT</b>
        </h1>
        <form className="flex card form">
          {/* <Input>Telefono</Input> */}
          <Input onChange={(e) => setUserInput(e.target.value)}>   Nombre De Usuario   </Input>
          <Input onChange={(e) => setEmailInput(e.target.value)}>Email</Input>
          <Input type="password" onChange={(e) => setPasswordInput(e.target.value)}  >  Contraseña  </Input>
          <Input type="password" onChange={(e) => setConfirmPasswordInput(e.target.value)}  >  Confirmar Contraseña   </Input>
          <Button onClick={onButtonClick} style="fill">   Registrarme   </Button>
        </form>
        <div className="register card">   <p>   ¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link>      </p>        </div>
      </div>
    </section>
  );
}

export default Login;
