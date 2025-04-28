function itemPageView() {

    let id = model.app.currentItem;
    console.log(id);
    return drawItem(id);
}

function drawItem(id) {
    return /*HTML*/`
    <div class = "descriptImg">
   
    ${drawImages(id)}
    ${isAdmin() ? `<button onclick = "editItem()">Edit image</button>` : ``}
    </div>
    <div class = "descriptName">
    ${drawName()}
    </div> 
    <div class = "descriptLatinName">
    ${drawLatinName()}
    </div> 
    <div class = "descript">
    ${drawDescription()}
    </div> 
    <div class = "amountOfFoundings">
    ${getAmountOfFoundings() == 0 ? 'Var ikke funnet enda' : 'Var funnet ' + getAmountOfFoundings() + ' ganger'}
    </div> 
    ${getAmountOfFoundings() == 0 ? '' :
    `<div class = "placesFounds">
    Dette ble funnet her: ${getPlacesWereFound()}
    </div> `}
    ${isAdmin() ? `<button onclick = "editDescription()">Edit description</button>` : ``}
    <div class = "buttons">
    <button class = "buttonOnItem" onclick = "setPage(model.app.pages.registerFinding)">Jeg har funnet dette, del hvor</button>
    </div>
   ${drawGalleryOfFindings()}
    `;
}
function drawGalleryOfFindings() {
    return /*HTML*/`
    <h1>Funn galleri</h1>
    <div class = "carousel">
    <div class = "carousel-inner">
    ${drawFindingsCarousell()}
    </div> 
    </div> 
    `;
}