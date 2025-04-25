function updateView() {
    mainView();
}

function setPage(pageName){
    const prev = model.app.currentPage;
    model.app.previousPage = prev; 
    model.app.currentPage = pageName; 
    updateView();
}

function setItemPage(pageName, itemId){
    const prev = model.app.currentPage;
    model.app.previousPage = prev; 
    model.app.currentPage = pageName;
    model.app.currentItem = itemId; 
    updateView();
}

function setFindingPage(pageName, findingId){
    const prev = model.app.currentPage;
    model.app.previousPage = prev; 
    model.app.currentPage = pageName; 
    model.app.currentFinding = findingId;
    updateView();
}

function getUserName(){
    if (model.app.currentUser != 0){
        for (const user of model.data.users) {
            if (model.app.currentUser == user.id){
                return `Design plug: you logged as ${user.name} 
                <button onclick = "logout()">Logg ut</button> 
                `
            }
        }
    }
    if (model.app.currentPage != 'loginReg'){
        return `<button onclick = "setPage(model.app.pages.login)">Logg inn</button> `
    }
}

function goToPreviousPage(){
    setPage(model.app.previousPage);
}

function isLoggedIn() {
    return model.app.currentUser != 0; 
}

function logout(){
    model.app.currentUser = 0; 
    updateView();
}


function getUserNameInProfile(){
    if (model.app.currentUser != 0){
        for (const user of model.data.users) {
            if (model.app.currentUser == user.id){
                return user.name
                
            }
        }
    }
    return '';
}
