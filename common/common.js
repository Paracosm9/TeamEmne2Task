function updateView() {
    mainView();
}

function setPage(pageName){
    model.app.currentPage = pageName; 
    updateView();
}

function setItemPage(pageName, itemId){
    model.app.currentPage = pageName; 
    model.app.currentItem = itemId; 
    updateView();
}

function setFindingPage(pageName, findingId){
    console.log(pageName);
    model.app.currentPage = pageName; 
    model.app.currentFinding = findingId;
    updateView();
}