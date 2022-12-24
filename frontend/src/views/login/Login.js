import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo";
import Button from "../../components/forms/Button";
import Input from "../../components/forms/input";
import UserContext from "../../contexts/UserContext";
import TokenContext from "../../contexts/TokenContext";
import { login } from "../../services/AuthService";
import illustration from "../../assets/notas3.jpg";

import GridColumn from "../../components/GridColumn";
import "./Login.css";

function Login() {
  const { setToken } = useContext(TokenContext);
  const { setUser } = useContext(UserContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["token", "userName"]);

  const navigate = useNavigate();

  async function onButtonClick(event) {
    event.preventDefault();
    const token = await login(userName, password);

    if (token) {
      setToken(token);
      setCookie("token", token, "/");
      setUser({ name: userName });
      setCookie("userName", userName);
      navigate("/panel");
    } else {
      alert("Credenciales Incorrectas");
    }
  }

  return (
    <section className="login1">
      <div className="flex container">
        <div>
          <Link to="/" align="center">
            <Logo size="15%" showText={false} />
          </Link>
          <h1 className="title">Iniciar Sesión en </h1>
          <div class="marca2">Do-ItApp</div>

          <div class="message1" align="center">
            ¡Que gusto verte nuevamente!
          </div>
          <form className="flex card form">
            <div class="espacio1" align="center">
              <Input onChange={(event) => setUserName(event.target.value)}>
                Usuario
              </Input>
            </div>
            <div align="center">
              <Input
                type="password"
                class="espacio2"
                onChange={(event) => setPassword(event.target.value)}
              >
                Contraseña
              </Input>
            </div>
            <div class="boton1">
              <Button onClick={onButtonClick} style="fill">
                Iniciar Sesión
              </Button>
            </div>
          </form>
          <div className="register card">
            <div class="message2" align="center">
              ¿Eres nuevo en Do-ItApp?
              <div />
              <div>
                <Link class="message3" to="/register">
                  Crear una cuenta
                </Link>
              </div>
            </div>
          </div>
          <Link to="//www.facebook.com/zapatillasscorpion154">
            <div class="br2" align="center">
              <img src="https://res.cloudinary.com/db8koqsxz/image/upload/v1671684802/facebook_guom54.png"></img>
            </div>
          </Link>
          <Link to="//www.instagram.com/zapatillasscorpion154/">
            <div class="bbr2" align="center">
              <img src="https://res.cloudinary.com/db8koqsxz/image/upload/v1671799517/instagram_caimst.png"></img>
            </div>
          </Link>
        </div>
        <GridColumn className="illustration2">
          <img height="640" width="910" src={illustration}></img>
        </GridColumn>
      </div>
    </section>
  );
}

export default Login;
