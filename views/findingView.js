function findingView() {

    let id = model.app.currentFinding; 
    return drawFinding(id);
}

function drawFinding(id) {
    return /*HTML*/`
    <div class = "findingsPage">
        <div class = "imgFinding">
            ${getFindingImageHTML(id)}
            ${getFindingDateHTML()}
        </div>

    <div class = "descriptName">
    ${getUserNameHTML()}
    </div> 
    
    <div class = "descript">
    ${getDescriptionHTML()}
    <br>
    ${getFindingPlaceHTML()}
    </div> 

  
    <div class = "buttons">
    <button class = "buttonOnItem" onclick = "setItemPage(model.app.pages.item, ${getItemId(id)})">Tilbake til item</button>
    </div>
    </div>
    `;
}
