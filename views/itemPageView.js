function itemPageView() {

    let id = model.app.currentItem;
    console.log(id);
    return drawItem(id);
}

function drawItem(id) {
    return /*HTML*/`
    <div class = "itemPageDiv">
            <div class = "descriptImg">
        
    
            ${drawImages(id)}
            </div>
            <div class = "descriptName">
            Navn: ${model.inputs.itemChange.id == 0 ? drawName() : 
                /*HTML*/`
                <input type="text" id="itemEdit1" 
                        value = "${drawName()}"
                        onchange = "setNewName(this.value, model.inputs.itemChange.id)"
                        >`}
            </div> 
            <div class = "descriptLatinName">
            Latinsk navn: ${model.inputs.itemChange.id == 0 ?  drawLatinName() : 
                /*HTML*/`
                <input type="text" id="itemEdit2" 
                        value = "${drawLatinName()}"
                        onchange = "setNewLatName(this.value, model.inputs.itemChange.id)"
                        >`}
           
            </div> 
            <div class = "descript">
            Beskrivelse: ${model.inputs.itemChange.id == 0 ?  drawDescription() : 
                /*HTML*/`
                <input type="text" id="itemEdit3" 
                        value = "${drawDescription()}"
                        onchange = "setNewDescription(this.value, model.inputs.itemChange.id)"
                        >`} 
            </div> 
            <div class = "amountOfFoundings">
            ${getAmountOfFoundings() == 0 ? 'Var ikke funnet enda' : 'Var funnet ' + getAmountOfFoundings() + ' ganger'}
            </div> 
            ${getAmountOfFoundings() == 0 ? '' :
            `<div class = "placesFounds">
            Dette ble funnet her: ${getPlacesWereFound()}
            </div> `}
            ${isAdmin() ? `<button onclick = "editDescription(model.app.currentItem)">Edit info</button>` : ``}
            ${isAdmin() && model.inputs.itemChange.id > 0 ? `<button onclick = "saveDescription()">Save info</button>` : ``}
            <div class = "buttons">
            <button class = "buttonOnItem" onclick = "setPage(model.app.pages.registerFinding)">Jeg har funnet dette, del hvor</button>
            </div>
        ${drawGalleryOfFindings()}
    </div>

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