function adminPageView (){

    return drawAdminPage(); 
}


function drawAdminPage(){
    return /*HTML*/`
    <div class = "adminPage" style = "border: 3px solid green">
        <div class = "findingsToAccept">
        ${drawListOfUnacceptedFindings()}
        </div>
        <div class = "userStat">
        <h4>Statistikk</h4>
        ${drawUserStatistics()}
        </div>
        <div class = "addItemAdm">${drawAddItem()}</div>
    </div>    
    `; 
}

function drawListOfUnacceptedFindings(){
    createFindidingsForAccept(); 
    let html = ``; 
    for (const finding of model.inputs.adminPage.findings) {
        let oneFindingHTML = /*HTML*/`
        <div class = "oneFinding">
            <img src = "${finding.image}" width = "300px" height = "300px">
            Id: ${finding.id}<br>
            Username: ${finding.userName}<br>
            Item name: ${finding.itemName} ${finding.itemName == "Var ikke funnet" ? `<button onclick = "addItem()">Add Item</button>` : ``}<br>
            Description: ${finding.description}<br>
            Date: ${finding.date}<br>
            <div class = "buttons">
            ${finding.itemName == "Var ikke funnet" ? `` : `<button onclick = "acceptAndPublishFinding(${finding.id})">Publish</button>`}
            <button onclick = "removeFinding(${finding.id})">Decline and delete</button>
            </div>
        </div>
        `;
        html += oneFindingHTML; 
    }
    return html; 
}

function drawAddItem(){
    return /*HTML*/`
    <div class = "itemAdd" id = "itemAdd">
        
    <input type="text" id="linkToImage" 
    value = "${model.inputs.adminPage.itemImg == '' ? 'Legg til linken til image' : model.inputs.adminPage.itemImg}" 
    name = "findingLink"
    onchange = "model.inputs.adminPage.itemImg = this.value, updateAdminPageWithImg()"
    >
    ${model.inputs.adminPage.itemImg == '' || !isValidUrl(model.inputs.adminPage.itemImg) ? '' : `<img src ="${model.inputs.adminPage.itemImg}" width = "150" height = "150" referrerpolicy="noreferrer"></img>`}


    <br>
    <input type="text" id="itemName" 
    value = "${model.inputs.adminPage.name == '' ? 'Legg til navn' : model.inputs.adminPage.name}"
    name = "itemName"
    onchange = "model.inputs.adminPage.name = this.value, isFieldEmpty(this.id)"
    >
    <br>
    <input type="text" id="itemLatName" 
    value = "${model.inputs.adminPage.latinName == '' ? 'Legg til latinsk navn' : model.inputs.adminPage.latinName}"
    name = "itemName"
    onchange = "model.inputs.adminPage.latinName = this.value, isFieldEmpty(this.id)"
    >

    <br>
    <textarea id="itemDescription" 
    value = "${model.inputs.adminPage.description == '' ? 'Legge til beskrivelse av item' : model.inputs.adminPage.description}"
    name="itemDescription"

    onchange = "model.inputs.adminPage.description = this.value, isFieldEmpty(this.id)"
    >Legge til beskrivelse av item
    </textarea>
    <br><br>
        <div class = "radioAll" style = "border: 1px dashed darkgreen; margin-bottom: 2px">
        <div class = "radio">
            <input type="radio" 
            id="edible" 
            name="foodType" 
            value="edible" 
            onclick = "model.inputs.adminPage.characteristics = this.checked ? 1 : 0"
            >
            <label for="edible"> Spiselige</label>
            </div>
            
            <div class = "radio">
            <input type="radio" 
            id="poisonous" 
            name="foodType" 
            value="poison" 
            onclick = "model.inputs.adminPage.characteristics = this.checked ? 2 : 0"
            >
            <label for="poisonous"> Giftige</label>
            </div>

            <div class = "radio">
            <input type="radio" 
            id="condEdible" 
            name="foodType" 
            value="condEdible" 
            onclick = "model.inputs.adminPage.characteristics = this.checked ? 3 : 0"
            >
            <label for="condEdible">Betinget spiselige</label>
    
            </div>
        </div>
        <div class = "radioAll" style = "border: 1px dashed darkgreen">
        <div class = "radio">
            <input type="radio" 
            id="mushroom" 
            name="foodType2" 
            value="edible" 
            onclick = "model.inputs.adminPage.type = this.checked ? 1 : 0"
            >
            <label for="mushroom"> Sopp</label>
            </div>
            
            <div class = "radio">
            <input type="radio" 
            id="berry" 
            name="foodType2" 
            value="poison" 
            onclick = "model.inputs.adminPage.type = this.checked ? 2 : 0"
            >
            <label for="berry"> Bær </label>
            </div>

            <div class = "radio">
            <input type="radio" 
            id="plant" 
            name="foodType2" 
            value="condEdible" 
            onclick = "model.inputs.adminPage.type = this.checked ? 3 : 0"
            >
            <label for="plant">Plant</label>
    
            </div>
        </div>
    

    <div class = "findingAdd">
        <button class = "addButton" id = "regFindButtonOk" onclick = "updateItems()" >Registrer</button>
        <button class = "addButton" id = "regFindButtonCancel" onclick = "cleanInputs()">Avbryt</button>
    </div>

    </div> 
    `; 
}

function drawUserStatistics(){
    return /*HTML*/`
    <table>
  <tr>
    <td>Users: </td>
    <td>Items: </td>
    <td>Findings: </td>
    <td>Visits: </td>
  </tr>
  <tr>
    <td>${model.data.users.length}</td>
    <td>${model.data.items.length}</td>
    <td>${model.data.findings.length}</td>
    <td>${model.data.users.length}</td>
  </tr>
</table>
    
    `;
}