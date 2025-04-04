function loginRegView() {
    return `
      <input id="username" />
      <input id="password" />
      <button onclick="login()">login</button>
      <button onclick="register()">registrer</button>
      <div id="message"></div>
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
  
  updateView();
  