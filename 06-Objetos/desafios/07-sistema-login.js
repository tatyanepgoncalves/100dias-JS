// Crie um array `usuarios`, onde cada objeto representa um usuário com `email` e `senha`. Depois, crie uma função `login(email, senha)` que verifica se o usuário existe e retorna `"Login bem-sucedido"` ou `"Usuário ou senha inválidos"`.

const usuarios = { email: "user@email.com", senha: "1234" }


function login(email, senha) {

  if (email === usuarios.email && senha === usuarios.senha) {
    console.log("Login bem sucedido.")
  } else {
    console.log("Usuário ou senha inválidos!")
  }
}

