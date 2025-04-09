function login() {
    const user = model.data.users.find(user => 
        user.username === model.inputs.login.username
        && user.password === model.inputs.login.password);

    if(user) {
        model.app.loggedInUserId = user.id;
        setPage(model.pages.dashboard);
    }

    updateView();
}