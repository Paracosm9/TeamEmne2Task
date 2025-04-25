function registerUserView() {
    return drawRegisterUser();
}

function drawRegisterUser() {

    return /*HTML*/`
            <div class = "findingAdd" style = "border: 5px solid black; margin: 20px; display:flex; justify-content: center; flex-direction: column; padding: 5px; ">
            
            <input type="text" id="userName" 
            value = "${model.inputs.registerUser.name == '' ? 'Legg til brukernavn' : model.inputs.registerUser.name}" 
            onchange = "model.inputs.registerUser.name = this.value, isUserFieldEmpty(this.id)"
            >
    
    
            <br>
            <input type="text" id="userMail" 
            value = "${model.inputs.registerUser.email == '' ? 'Legg til email' : model.inputs.registerUser.email}"
            onchange = "model.inputs.registerUser.email = this.value, isUserFieldEmpty(this.id)"
            >
    
            <br>
          
            <br>
            <input type="text" id="userPass" 
            value = "${model.inputs.registerUser.pass == '' ? 'Leg til passord' : model.inputs.registerUser.pass}"
            name="findPlace"
            onchange = "model.inputs.registerUser.pass = this.value, isUserFieldEmpty(this.id)"
            >
            </div>
    
            <div class = "findingAdd" style = "border: 5px solid black; margin: 20px; display:flex; justify-content: center; flex-direction: row; padding: 5px;">
            <button class = "addButton" id = "regFindButtonOk" onclick = "updateUserDataBaseAndGoToMain()" >Registrer meg</button>
            <button class = "addButton" id = "regFindButtonCancel" onclick = "setPage(model.app.pages.login)">Avbryt</button>
            </div>
        `;
}