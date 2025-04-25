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
        <div class = "carouselElement" style = "border: 3px dashed green" onclick = "setFindingPage(model.app.pages.finding,${finding.id})">
        <img src =${finding.imagePath} width = "100" height = "100"><br>
        Date: ${finding.dateFind}<br>
        Location: ${finding.location}
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
        console.log("aaaaa");
        model.inputs.userArea.pass = '1';
        updateView();
    }
    else if (howToChange == 1) {
        if (document.getElementById("newPassword").value == document.getElementById("newPasswordRepeat").value) {
            console.log("JUJUJU")
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