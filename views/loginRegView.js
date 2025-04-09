function loginRegView() {
  return `
       <label for="username">Username</label>
        <input id="username" onchange="model.inputs.login.username = this.value"><br>
        <label for="password">Password</label>
        <input id="password" onchange="model.inputs.login.password = this.value"><br>
        <button onclick="login()">Login</button>
  `;
}

function login() {
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value
  const messageBox = document.getElementById("message")

  if (username === "" || password === "") {
    messageBox.innerHTML = "Fyll inn brukernavn og passord."
  } else {
    messageBox.innerHTML = "Logget inn som " + username
  }
}

function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const messageBox = document.getElementById("message")

  if (username === "" || password === "") {
    messageBox.innerHTML = "Fyll inn brukernavn og passord."
  } else {
    messageBox.innerHTML = "Registrert som " + username
  }
}

updateView()
