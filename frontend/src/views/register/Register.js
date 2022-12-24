import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import Button from "../../components/forms/Button";
import Input from "../../components/forms/input";
import { register } from "../../services/AuthService";
import GridColumn from "../../components/GridColumn";
import "./Register.css";
import illustration from "../../assets/notas2.jpg";
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
      <div className="flex container">
        <div>
          <Link to="/">
            <Logo size="15%" showText={false} />
          </Link>
          <h1 className="title">Registrarse en</h1>
          <div class="marca1">Do-ItApp</div>
          <form className="flex card form">
            {/* <Input>Telefono</Input> */}
            <Input onChange={(e) => setUserInput(e.target.value)}>
              Nombre De Usuario
            </Input>

            <Input onChange={(e) => setEmailInput(e.target.value)}>Email</Input>

            <Input
              type="password"
              onChange={(e) => setPasswordInput(e.target.value)}
            >
              Contraseña
            </Input>
            <Input
              type="password"
              onChange={(e) => setConfirmPasswordInput(e.target.value)}
            >
              Confirmar Contraseña
            </Input>
            <Button onClick={onButtonClick} style="fill">
              Registrarme
            </Button>
          </form>
          <div class="registercard">
            ¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link>
            <Link to="//www.facebook.com/zapatillasscorpion154">
              <div class="br1">
                <img src="https://res.cloudinary.com/db8koqsxz/image/upload/v1671684802/facebook_guom54.png"></img>
              </div>
            </Link>
            <Link to="//www.instagram.com/zapatillasscorpion154/">
              <div class="bbr1" align="center">
                <img src="https://res.cloudinary.com/db8koqsxz/image/upload/v1671799517/instagram_caimst.png"></img>
              </div>
            </Link>
          </div>
        </div>

        <GridColumn className="illustration1">
          <img height="640" width="850" src={illustration}></img>
        </GridColumn>
      </div>
    </section>
  );
}

export default Login;
