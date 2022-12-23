export async function login(user, password) {
  const res = await fetch("http://localhost:8080/api/login/", {
    headers: {
      name: user,
      password: password,
    },
  });

  if (res.ok) {
    const document = await res.json();
    return document.token;
  } else {
    console.log("no autorizado");
    return null;
  }
}

export async function register(user, password,emailInput) {
  const data = {
    usuario: {
      nombre: user,
      contraseña : password,
      email: emailInput
    },
  };
  const res = await fetch("http://localhost:8080/user/", {
    method: "POST",
    mode: 'cors',
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const document = await res.json();
    return document;
  } else {
    return null;
  }
}
