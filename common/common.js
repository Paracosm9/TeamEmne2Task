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
                return `Design plug: you logged as ${user.name}`
            }
        }
    }
}

function goToPreviousPage(){
    setPage(model.app.previousPage);
}

function isLoggedIn() {
    return model.app.currentUser != 0; 
}