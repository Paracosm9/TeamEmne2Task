function createFindidingsForAccept(){
    let temporaryFindings = []; 
    for (const finding of model.data.findings) {
        if (!finding.acceptedToBePublished){
            let findingId = finding.id; 
            temporaryFindings.push({
                id: findingId, 
                userName:getUserNameForAdminFind (finding.userId), 
                itemName: getItemName(finding.itemId), 
                location: getLocationNameForAdmin(finding.locationId), 
                image: getImagePathAdminFinding(finding.id), 
                description: finding.description, 
                date: finding.dateFind
            })
        }
    }
    model.inputs.adminPage.findings = temporaryFindings; 
}

function getUserNameForAdminFind(userId){
    for (const user of model.data.users) {
        if (user.id == userId){
            return user.name; 
        }
    }
}

function getItemName(itemId){
    for (const item of model.data.items) {
        if (item.id == itemId){
            return item.name; 
        }
    }
    return "Var ikke funnet"
}

function getLocationNameForAdmin(locationId){
    for (const location of model.data.location) {
        if (location.id == locationId){
            return location.name;
        }
    }
}
function getImagePathAdminFinding(findingId){
    console.log (findingId);
    for (const findImg of model.data.findingImages) {
        if (findImg.findingId == findingId){
            for (const img of model.data.images) {
                if (img.id == findImg.imgId){
                    return img.filePath;
                }
            }
        }
    }
}

function acceptAndPublishFinding(findingId){
    for (const finding of model.data.findings) {
        if (finding.id == findingId){
            finding.acceptedToBePublished = true; 
        }
    }
    updateView();
}

function removeFinding(findingId){
    let index = 0; 
    for (const finding of model.data.findings) {
        index++; 
        if (finding.id == findingId){
            break; 
        }
    }
    console.log("This is index: " + index)
    model.data.findings.splice(index - 1, 1); 
    updateView()
}



function updateAdminPageWithImg() {
    model.inputs.adminPage.itemImg = model.inputs.adminPage.itemImg.replace(".jpeg", ".jpg")
    updateView();
}

function addItem(){
    document.getElementById("itemAdd").style = "border: 2px solid darkgreen; margin: 20px; display:flex; justify-content: center; flex-direction: column; padding: 5px;"
}

function updateItems(){
    let inputs = model.inputs.adminPage; 
    if (inputs.itemImg != '' && inputs.name != '' 
        && inputs.characteristics != 0 
        && inputs.latinName != '' 
        && inputs.type != 0){
            let newId = getNewId(model.data.items);
            model.inputs.adminPage.itemId = newId; 
            let newItem = {
                id: newId,
                name: inputs.name,
                latinName: inputs.latinName, 
                description: inputs.description, 
                type: inputs.type
            }; 
            setNewImageAdmin();
            setNewCharacteristic(); 
            cleanInputs(); 
        }
}

function setNewCharacteristic(){
    model.data.itemCharacteristics.push({
        itemId: model.inputs.adminPage.itemId, 
        type: model.inputs.adminPage.characteristics
    });
} 

function setNewImageAdmin(){
    let newId = getNewId(model.data.images); 
    model.data.images.push({
        id: newId, 
        filePath: model.inputs.adminPage.itemImg
    });

    model.data.itemsImages.push({
        itemId: model.inputs.adminPage.itemId, 
        imgId: newId
    }); 
}

function cleanInputs(){
    model.inputs.adminPage.itemImg = ''; 
    model.inputs.adminPage.itemId = 0; 
    model.inputs.adminPage.name = ''; 
    model.inputs.adminPage.latinName = ''; 
    model.inputs.adminPage.description = ''; 
    model.inputs.adminPage.type = 0; 
    model.inputs.adminPage.characteristics = 0; 
    updateView();
}