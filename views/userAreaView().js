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
        <img src = "common/images/userimages/default_user.png" width = "100" height = "100">
        <button class = "btn" style = "width: 35%" onclick = "">Endre bildet</button>
        ${getUserNameInProfile()}
        <button class = "btn" style = "width: 35%" onclick = "">Endre passord</button>
        ${getAmountOfFindings() == 0 ? `Du har funnet ingenting enda`: `<h4>Du har funnet ${getAmountOfFindings()} funn!</h4> `}
    </div> 
    <div class = "usefulLinks">
    <button class = "btn" style = "width: 35%" onclick = "setPage(model.app.pages.rewards)">Gå til Rewards</button>
    </div>
    <div class = "carousell" style = "border: 5px solid black; margin-top: 20px; width: 35%">
    <h4>Dine funn:</h4>
    ${drawUserFindingsCarousell()}
    </div>

    <div class = "text" style = "border: 5px solid black; margin-top: 20px;">
    <h4>Gi oss gjerne beskjed!</h4>
    <textarea class = "textarea" id="feedbackform" 
    name="feedbackform">
    </textarea>
    <br>
    <button onclick = "">Send</button>
    </div>
    `;
}