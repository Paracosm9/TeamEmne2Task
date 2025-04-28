function getAmountOfFindings() {
    let amount = 0;
    for (const finding of model.data.findings) {
        if (model.app.currentUser == finding.userId && finding.acceptedToBePublished) {
            amount++;
        }
    }
    return amount;
}


function drawUserFindingsCarousell() {
    let findingsWithImages = [];
    let findingsHTML = ``;
    for (const finding of model.data.findings) {
        if (finding.acceptedToBePublished && finding.userId == model.app.currentUser) {
            findingsWithImages.push({
                id: finding.id,
                location: getLocationName(finding.locationId),
                dateFind: finding.dateFind,
                imagePath: getImagePath(finding.id)
            });
        }
    }
    for (const finding of findingsWithImages) {
        let oneFinding = /*HTML*/`
        <div class = "carousel-item" onclick = "setFindingPage(model.app.pages.finding,${finding.id})">
        <img src =${finding.imagePath}>
        <div class = "carousel-caption">
        Date: ${finding.dateFind}<br>
        Location: ${finding.location} 
        </div>
        </div>
        `;
        findingsHTML += oneFinding;
    }
    return findingsHTML;
}

function getPictureAvatarId() {
    for (const userPic of model.data.userPicImages) {
        if (model.app.currentUser == userPic.userId) {
            return userPic.imgId;
        }
    }
    return 0;
}

function getUserPic(imgId) {
    for (const image of model.data.images) {
        if (image.id == imgId) {
            return image.filePath;
        }
    }
}

function changePassWordView(howToChange) {
    console.log(howToChange);
    if (howToChange == 0) {
        model.inputs.userArea.pass = '1';
        updateView();
    }
    else if (howToChange == 1) {
        if (document.getElementById("newPassword").value == document.getElementById("newPasswordRepeat").value) {
            changePassword();
            model.inputs.userArea.pass = '';
            model.inputs.userArea.repeatPass = '';
            updateView();

        }
        else {
            document.getElementById("newPassword").style.border = "2px solid red";
            document.getElementById("newPasswordRepeat").style.border = "2px solid red";
        }
    }
    else if (howToChange == 2) {
        model.inputs.userArea.pass = '';
        updateView();
    }
}

function changePassword() {
    for (const user of model.data.users) {
        if(user.id == model.app.currentUser){
            user.pass = model.inputs.userArea.pass;
            break;
        }
    }
}

function changePicture(setting){
    if(setting == 0){
        model.inputs.userArea.img = '1'; 
        updateView();
    }
    else if (setting == 1){
        if (isValidUrl(model.inputs.userArea.img)){
            setNewAvatar(); 
            model.inputs.userArea.img = ''; 
            updateView();
        }
        else {
            document.getElementById("newAvatar").style.border = "2px solid red";
        }
    }
    else if (setting == 2) {
        model.inputs.userArea.img = ''
        updateView();
    }
}

function setNewAvatar(){
    let newImgId = getNewImgId();
    model.data.images.push({
        id: newImgId, 
        filePath: model.inputs.userArea.img
    }); 

    for (const userImage of model.data.userPicImages) {
        if(model.app.currentUser == userImage.userId){
            userImage.imgId = newImgId; 
        }
    }

}

function getNewImgId(){
    let newId = 0; 
    for (const img of model.data.images) {
        if(img.id > newId){
            newId = img.id; 
        }
    }
    return newId + 1; 
}