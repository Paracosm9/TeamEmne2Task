function catalogView() {
    if (isFirstCall()) getArrayOfItems();
    return drawCatalogView();
}

function drawCatalogView() {
    let divApp = ``;
    divApp = /*HTML*/`
    ${drawSorting()}
    ${drawCatalog()}
    `;
    return divApp;
}

function drawSorting() {
    let sorting = /*HTML*/`
     <div id = "sortdiv">
    <label for="sorting">Choose a sort type:</label>                               
        <select class = "selection" 
        name="sorting" 
        id="selectCatalog" 
        onchange = "model.inputs.catalog.sort = this.value,  getArrayOfItems()"
        >
            <option value="" disabled ${model.inputs.catalog.sort == '' ? "selected" : ""} >Select sort type</option>
            <option value="artsnavn" ${model.inputs.catalog.sort == 'artsnavn' ? "selected" : ""}>Artsnavn (A-Å)</option>
            <option value="antall" ${model.inputs.catalog.sort == 'antall' ? "selected" : ""} >Antall registring</option>
        </select> 
                <br><br>
                <label for="itemName">Artsnavn</label>
                <input type="text" id="itemName" 
                    value="${model.inputs.catalog.name}" 
                    name="itemNameText" 
                    onchange = "model.inputs.catalog.name = this.value, getArrayOfItems()"
                    ${model.inputs.catalog.name == '' ? "" : "autofocus"} 
                    ><br>

                <label for="itemPlace">Sted &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; </label>
                <input type="text" id="itemPlace" 
                value = "${model.inputs.catalog.location}"
                name="itemPlaceText"
                onchange = "model.inputs.catalog.location = this.value, getArrayOfItems()"
                ${model.inputs.catalog.location == '' ? "" : "autofocus"}
                >
                <br>
                <br>
                <label for="">Valg type:</label>
                <br>

                <input type="checkbox" 
                id="edible" 
                name="eat" 
                value="edible" 
                ${model.inputs.catalog.isEdible  ? "checked" : ""}
                onclick = "model.inputs.catalog.isEdible = this.checked, getArrayOfItems()"
                >
                
                <label for="edible"> Spiselige</label><br>
                <input type="checkbox" 
                id="poisonous" 
                name="poison" 
                value="poison" 
                ${model.inputs.catalog.isPoisonous  ? "checked" : ""}
                onclick = "model.inputs.catalog.isPoisonous = this.checked, getArrayOfItems()"
                >

                <label for="poisonous"> Giftige</label><br>
                <input type="checkbox" 
                id="condEdible" 
                name="edWithConditions" 
                value="condEdible" 
                ${model.inputs.catalog.isPartiallyEdible  ? "checked" : ""}
                onclick = "model.inputs.catalog.isPartiallyEdible = this.checked, getArrayOfItems()"
                >
                <label for="condEdible">Betinget spiselige</label><br>
                <hr>
        </div>
    `;
    return sorting;
}

function drawCatalog() {
    let catalogHtml = ``;
    let items = model.inputs.catalog.items;
    for (const item of items) {
        let oneItemHTML = /*HTML*/`
            <div class = "itemCatalog" onclick = "setItemPage(model.app.pages.item,${item.id})">
            <img src = ${item.oneImage} class = "descriptImg" height = "150" width = "150">
            <strong> Name: </strong> ${item.name}<br>
             Description: ${item.description}<br>
             Latin name: ${item.latinName}<br>
            
             Type: ${item.type}<br>
             Amount of places were found: ${item.amountOfPlaces}<br>
             Places were found: ${item.locations.length > 0 ? item.locations.toString() : "Ingen..."}<br>
            
            </div>
        `;
        catalogHtml += oneItemHTML;
    }

    return catalogHtml;
}

