function login() {
    let user = isUserCorrect(); 
    if (user) {
        model.app.currentUser = user.id;
        setPage(model.app.pages.homeAndMain);
    }
    else {
        console.log("incorrect user");
    }

    updateView();
}

function isUserCorrect() {
    const user = model.data.users.find(user =>
        user.name === model.inputs.login.userName
        && user.pass === model.inputs.login.password);
        console.log(user);
    return user;
}