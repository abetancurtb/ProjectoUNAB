export async function getNotas(token) {
    const res = await fetch("http://localhost:8080/api/notes/", {
        headers: {
          token: token,
        },
      });
      const documents = await res.json();
      return documents;
}

export async function registerNotas(user, categoria,periodicidad, estado) {
  const data = {
      user: user,
      categoria : categoria,
      periodicidad: periodicidad,
      estado: estado
    
  };

  const res = await fetch("http://localhost:8080/note/", {
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
  
