function catalogView() {

    // let isAdmin = false 
    
    if (model.inputs.catalog.sort == ''){
        getArrayOfItems();
    }
    let html = drawCatalogView();
    return html;
}

/**
 * To do: 
 * 1. plugs for everything
 * 2. Change plugs to something. 
 * 3. Sorting should be the field. 
 * 4. 
 * 3. Leave it as it is to wait for code. 
 * 
 */
// function catalogItem(){

// }
function drawCatalogView() {
    let divApp = ``;
    divApp = /*HTML*/`
    ${drawSorting()}
    ${drawCatalog()}

    `;
    return divApp;
}

function drawSorting(items) {
    console.log(items);
     let sorting = /*HTML*/`
    <label for="sorting">Choose a sort type:</label>                               
        <select class = "selection" name="sorting" id="selectCatalog" onchange = "model.inputs.catalog.sort = this.value,  sortByOption()">
            <option value="">Select sort type</option>
            <option value="artsnavn">Artsnavn (A-Å)</option>
            <option value="antall">Antall registring</option>
        </select> 
        <br>
        <hr>
    `;
    return sorting;
}

function drawCatalog() {
    let catalogHtml = ``;
    let items = model.inputs.catalog.items; 
    for (const item of items) {
        let oneItemHTML = /*HTML*/`
            <div class = "itemCatalog" style = "border: 5px solid black; margin: 20px" onclick = "goToPage(${item.id})">
             Name: ${item.name}<br>
             Description: ${item.description}<br>
             Latin name: ${item.latinName}<br>
             ImaginaryImage (would be changed): ${item.oneImage}<br>
             Type: ${item.type}<br>
             Amount of places were founded: ${item.amountOfPlaces}<br>
            
            </div>
            <br>
        `;
        catalogHtml += oneItemHTML;
    }

    return catalogHtml; 
}

