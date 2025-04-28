

function drawImages() {

    let html = ``;
    for (const item of model.data.itemsImages) {
        if (item.itemId == model.app.currentItem) {
            let idOfImage = item.imgId;
            for (const image of model.data.images) {
                if (image.id == idOfImage) {
                    html += `<img src ="${image.filePath}" class = "descriptImg" width = "400" height = "400"> 
                    <br>
                    ${isAdmin() && model.inputs.itemChange.img == '' ? /*HTML*/`<button onclick = "editItemImage(${image.id})">Edit image</button><br>` : ``}
                    ${isAdmin() && model.inputs.itemChange.img != '' ? /*HTML*/`
                        Skriv linken til ny img: <br>
                    <input type="text" id="newItemImage" 
                    value = ""
                    name = "newItemImage"
                    onchange = "model.inputs.itemChange.img = this.value"
                    >
                    <button onclick = "saveItemImage(${image.id})">Save image</button>` : ``}
                    `;
                }
            }
        }
    }
    return html;
}

function drawDescription() {
    for (const item of model.data.items) {
        if (item.id == model.app.currentItem) {
            console.log
            return item.description;
        }
    }
}

function drawName() {
    for (const item of model.data.items) {
        if (item.id == model.app.currentItem) {
            return item.name;
        }
    }
}
function drawLatinName() {
    for (const item of model.data.items) {
        if (item.id == model.app.currentItem) {
            return item.latinName;
        }
    }
}

function getAmountOfFoundings() {
    let amountOfFindings = 0;
    for (const finding of model.data.findings) {
        if (finding.itemId ==  model.app.currentItem && finding.acceptedToBePublished) {
            amountOfFindings++;
        }
    }
    return amountOfFindings;
}

function getPlacesWereFound() {
    let locations = [];
    let htmlPlaces = `<ul>`;
    for (const findings of model.data.findings) {
        if (findings.itemId == model.app.currentItem && findings.acceptedToBePublished && !(locations.includes(findings.locationId))) {
            locations.push(findings.locationId);
        }
    }
    for (const location of locations) {

        for (const locationInData of model.data.location) {
            if (location == locationInData.id) {
                htmlPlaces += `<li>${locationInData.name}</li>`;
            }
        }
    }
    htmlPlaces += `</ul>`
    return htmlPlaces;
}

function drawFindingsCarousell() {
    let findingsWithImages = [];
    let findingsHTML = ``;
    for (const finding of model.data.findings) {
        if (finding.acceptedToBePublished && finding.itemId == model.app.currentItem) {
            findingsWithImages.push({
                id: finding.id,
                location: getLocationName(finding.locationId),
                dateFind: finding.dateFind,
                imagePath: getImagePath(finding.id)
            }); 
        }
    }
    for (const finding of findingsWithImages) {
        let oneFinding = /*HTML*/`
        <div class = "carousel-item" onclick = "setFindingPage(model.app.pages.finding,${finding.id})">
        <img src =${finding.imagePath}>
        <div class="carousel-caption">
        Date: ${finding.dateFind}<br>
        Location: ${finding.location}
        </div>
     
        </div>
        `; 
        findingsHTML += oneFinding; 
    }
    return findingsHTML;
}

function getImagePath(idOfFinding){
    for (const imgFinding of model.data.findingImages) {
        if(imgFinding.findingId == idOfFinding){
            for (const image of model.data.images) {
                if (image.id == imgFinding.imgId){
                    return image.filePath; 
                }
            }
        }
    }
}

function getLocationName(idOfLocation){
    for (const location of model.data.location) {
        if(location.id == idOfLocation){
            return location.name;
        }
    }
}

function setNewName(newName, idOfItem){
    for (const item of model.data.items) {
        if(item.id == idOfItem){
            item.name = newName;
            return; 
        }
    }
}

function setNewLatName(newLatName, idOfItem){
    for (const item of model.data.items) {
        if(item.id == idOfItem){
            item.latinName = newLatName;
            return; 
        }
    }
}

function setNewDescription(newDescription, idOfItem){
    for (const item of model.data.items) {
        if(item.id == idOfItem){
            item.description = newDescription;
            return; 
        }
    }
}

function editDescription(itemId){
    model.inputs.itemChange.id = itemId; 
    updateView();
}

function saveDescription(){
    model.inputs.itemChange.id = 0; 
    updateView();
}

function editItemImage(imgId){
    model.inputs.itemChange.img = getImagePathForAdmin(imgId); 
    updateView();
    
}

function getImagePathForAdmin(imgId){
    for (const img of model.data.images) {
        if (imgId == img.id){
            return img.filePath; 
        }
    }
}

function saveItemImage(imgId){
    for (const img of model.data.images) {
        if (imgId == img.id){
            img.filePath = model.inputs.itemChange.img; 
        }
    } 
    model.inputs.itemChange.img = ''; 
    updateView();
}