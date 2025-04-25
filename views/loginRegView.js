function loginRegView() {
  return isLoggedIn() ?  
  /*HTML*/`
  <h1>Du er logged inn</h1>
  ` 
  : /*HTML*/`
      <div class = "textFields" style = "border: 2px solid gray">
      ${!isUserCorrect() && (model.inputs.login.userName != '' || model.inputs.login.password != '') ? 
        /*HTML*/`<div class = "message">
               <h1 style = "color: violet" > Passord eller brukernavn er inkorrekt!
                </div>
        ` : ``}
      <label for="username">Username</label>
      <input id="username" onchange="model.inputs.login.userName = this.value"><br>
      <label for="password">Password</label>
      <input id="password" type="password" onchange="model.inputs.login.password = this.value"><br>
      <button onclick="login()">Login</button>
      <button onclick="setPage(model.app.pages.registerUser)">Register</button>
      </div>
  `;
}
