function findingView() {

    let id = model.app.currentFinding; 
    return drawFinding(id);
}

function drawFinding(id) {
    return /*HTML*/`
    <div class = "img" style = "border: 5px solid black; margin: 20px">
    ${getFindingImageHTML(id)}
    ${getFindingDateHTML()}
    </div>

    <div class = "descriptName" style = "border: 5px solid black; margin: 20px">
    ${getUserNameHTML()}
    </div> 
    
    <div class = "descript" style = "border: 5px solid black; margin: 20px">
    ${getDescriptionHTML()}
    </div> 

  
    <div class = "buttons">
    <button class = "buttonOnItem" onclick = "setItemPage(model.app.pages.item, ${getItemId(id)})">Tilbake til item</button>
    </div>
    `;
}
