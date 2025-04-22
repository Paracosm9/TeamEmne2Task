function findingsPageView (){
    let id = 1; //to change; should be changed by click or by page. 
    return drawItem(id);
}

function drawItem(id) {
    return /*HTML*/`
    <div class = "carousell" style = "border: 5px solid black; margin: 20px">
    ${drawImages(id)}
    </div>
    <div class = "descriptName" style = "border: 5px solid black; margin: 20px">
    ${drawName()}
    </div> 
    <div class = "descriptLatinName" style = "border: 5px solid black; margin: 20px">
    ${drawLatinName()}
    </div> 
    <div class = "descript" style = "border: 5px solid black; margin: 20px">
    ${drawDescription()}
    </div> 
    <div class = "amountOfFoundings" style = "border: 5px solid black; margin: 20px">
    ${getAmountOfFoundings() == 0 ? 'Var ikke funnet enda' : 'Var funnet ' + getAmountOfFoundings() + ' ganger' }
    </div> 
    <div class = "placesFounds" style = "border: 5px solid black; margin: 20px">
    Dette ble funnet her: ${getPlacesWereFound()}
    </div> 
    <div class = "buttons">
    <button class = "buttonOnItem" onclick = "goToRegisterFinding()">Jeg har funnet dette, del hvor</button>
    </div>
   ${drawGalleryOfFindings()}
    

    
    `;
}
function drawGalleryOfFindings(){
    return /*HTML*/`
    <div class = "carousell" style = "border: 5px solid black; margin: 20px; transform: scale(0.5); transform-origin: top left;">
    <h1>Plug - Carousel of findings :3</h1>
    ${drawFindingsCarousell()}
    </div> 
    `;
}