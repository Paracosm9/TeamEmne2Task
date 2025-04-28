function isUserFieldEmpty(elementId) {
    console.log(elementId);
    let element = document.getElementById(elementId);
    let inputs = model.inputs.registerUser;
    if ((elementId == 'userName' && inputs.name == '') 
        ||  (elementId == 'userMail' && !isValidEmail(model.inputs.registerUser.email))
        || (elementId == 'userPass' && inputs.pass == '')) {
        element.style.border = "2px solid red";
        return false;
    }
    else {
        element.style.border = "";
        return true;
    }
}

function isValidEmail(emailToCheck){ //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
    var regExp = /\S+@\S+\.\S+/;
    return regExp.test(emailToCheck);
}


function areAllUserFieldsNotEmpty() {
    let fields = ['userName', 'userMail', 'userPass'];
    let allElementsAreFilled = [];
    let allFieldsAreOK = true;
    for (const field of fields) {
        allElementsAreFilled.push(isUserFieldEmpty(field));
    }
    for (const fieldStatus of allElementsAreFilled) {
        if (!fieldStatus) {
            return false;
        }
    }
    return allFieldsAreOK;
}

function updateUserDataBaseAndGoToMain() {
    if (areAllUserFieldsNotEmpty() && isValidEmail(model.inputs.registerUser.email)) {
        model.app.currentUser = registerNewUserAndReturnHisId();
        setPage(model.app.pages.homeAndMain);
        model.inputs.registerUser.name = '';
        model.inputs.registerUser.email = '';
        model.inputs.registerUser.pass = '';
    }
}

function registerNewUserAndReturnHisId(){
    let newId = getNewId(model.data.users);
    model.data.users.push({
        id: newId, // from registerFindingController)
        name: model.inputs.registerUser.name,
        email: model.inputs.registerUser.email,
        pass: model.inputs.registerUser.pass,
        type: 'user',
        registerDate: new Date().toISOString()
    });
    model.data.userPicImages.push({
        userId: newId, 
        imgId: 12 //default img for new user; 
    }); 
    return newId;
}   