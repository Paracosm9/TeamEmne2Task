function userAreaView(){
    return isLoggedIn() ? 
    drawUserArea() : 
    /*HTML*/`
    <h2 class = "infoh2"> Denne siden kan bruke bare de som er logget inn</h2>
    `
}


function drawUserArea(){
    return /*HTML*/`
    <div class = "personalInfo" style = "border: 2px solid black; display: flex; flex-direction: column; width: 25%">
        ${
            model.inputs.userArea.img == '' ? 
            /*HTML*/`
            <img src = "${getPictureAvatarId() > 0 ? getUserPic(getPictureAvatarId()) : 'common/images/userimages/default_user.png'}" class = "imgAvatar" width = "100" height = "100">
        <button class = "btn" onclick = "changePicture(0)">Endre bildet</button>
        
        <br>
            ` : 
          /*HTML*/`
            <img src = "${getPictureAvatarId() > 0 ? getUserPic(getPictureAvatarId()) : 'common/images/userimages/default_user.png'}" class = "imgAvatar" width = "100" height = "100" >
            Skriv linken til ny avatar: <br>
            <input type="text" id="newAvatar" 
            value = ""
            name = "newAvatar"
            onchange = "model.inputs.userArea.img = this.value"
            >
            <button class = "btn" onclick = "changePicture(1)">Endre bildet</button>
            `
        }
        ${getUserNameInProfile()}
        ${
            model.inputs.userArea.pass == '' ? 
            `<button class = "btn"  onclick = "changePassWordView(0)">Endre passord</button>`
            : 
            /*HTML*/`
            Skriv nytt passord: <br>
            <input type="text" id="newPassword" 
            value = ""
            name = "newPassword"
            onchange = "model.inputs.userArea.pass = this.value"
            >
            <br>
            Gjenta passord: <br> 
        <input type="text" id="newPasswordRepeat" 
            value = ""
            name = "newPasswordRepeat"
            onchange = "model.inputs.userArea.pass = this.value"
            >
            <button class = "btn"  onclick = "changePassWordView(1)">Lagre passord</button>
            <button class = "btn"  onclick = "changePassWordView(2)">Avbryt</button>
            ` 
        }
        ${getAmountOfFindings() == 0 ? `Du har funnet ingenting enda`: `<h4>Du har funnet ${getAmountOfFindings()} funn!</h4> `}
    </div> 
    <div class = "usefulLinks">
    <button class = "btn"  onclick = "setPage(model.app.pages.rewards)">Gå til Rewards</button>
    </div>
    <h4>Dine funn:</h4>
    <div class = "carousel">
    <div class = "carousel-inner">
    ${drawUserFindingsCarousell()}
    </div>
    </div>

    <div class = "text" style = "border: 5px solid black; margin-top: 20px;">
    <h4>Gi oss gjerne beskjed!</h4>
    <textarea class = "textarea" id="feedbackform" 
    name="feedbackform">
    </textarea>
    <br>
    <button onclick = "">Send</button>
    </div>

    ${ isAdmin() ? /*HTML*/`
        <button onclick = "setPage(model.app.pages.adminPage)">Gå til adminsiden</button>
        `: ``}
    `;
}