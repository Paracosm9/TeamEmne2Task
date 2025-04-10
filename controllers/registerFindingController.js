function isFieldEmpty(elementId) {
    console.log(elementId);
    let element = document.getElementById(elementId);
    let inputs = model.inputs.registerFinding;
    if ((elementId == 'linkToWebSite' && inputs.img == ''|| elementId == 'linkToWebSite' && !isValidUrl(model.inputs.registerFinding.img))
        || (elementId == 'findPlace' && inputs.locationName == '')
        || (elementId == 'findName' && inputs.name == '')
        || (elementId == 'findDescription' && inputs.description == '' 
        ))

    {
        element.style.border = "2px solid red";
        return false; 
    }
    else {
        element.style.border = "";
        return true; 
    }

}
function areAllFieldsNotEmpty(){
    let fields = ['linkToWebSite', 'findPlace','findName','findDescription']; 
    let allElementsAreFilled = []; 
    let allFieldsAreOK = true; 
    for (const field of fields) {
        allElementsAreFilled.push(isFieldEmpty(field)); 
    }
    for (const fieldStatus of allElementsAreFilled) {
        if (!fieldStatus){
            return false; 
        }
    }
    return allFieldsAreOK; 
}

function isValidUrl(urlToCheck){
        try { 
           console.log("Link is valid.") 
            return Boolean(new URL(urlToCheck)); 
        }
        catch(error){ 
            console.log("Link is not valid.")
            return false; 
        }
}
function updatePageWithImg(){
    model.inputs.registerFinding.img = model.inputs.registerFinding.img.replace(".jpeg", ".jpg")
    updateView();
    isFieldEmpty('linkToWebSite');
}

/** More controlls */
function updateModel(){
   if ( areAllFieldsNotEmpty() && isValidUrl(model.inputs.registerFinding.img)){
        let locationId = setNewLocationAndGetID();
        let idOfNewFinding = setFinding(locationId);
        setNewImageLink(idOfNewFinding); 
        
        updateView();
        model.inputs.registerFinding.name = '';
        model.inputs.registerFinding.img = '';
        model.inputs.registerFinding.locationName = '';
        model.inputs.registerFinding.description = '';
   }
}

function getNewId(dataWithId){
    let newId = 0; 
    for (const item of dataWithId) {
        if (item.id > newId){
            newId = item.id;
        }
    }
    return newId+1; 
}

function setNewLocationAndGetID(){
    let newLocationIndex = getNewId(model.data.location); 
    let newLocation = {
        id: newLocationIndex, 
        name: model.inputs.registerFinding.locationName, 
        description: "Admin should update the description"
    }; 

    model.data.location.push(newLocation); 
    return newLocationIndex; 
}

function setFinding(locationIdTo){
    let newFindingIndex = getNewId(model.data.findings); 
    let newFinding = {
        id: newFindingIndex, 
        userId: 2, //change after
        itemId: newFindingIndex, //also plug, change after
        locationId: locationIdTo, 
        dateFind: new Date().toISOString(), 
        description: model.inputs.registerFinding.description, 
        acceptedToBePublished: false
    };
    model.data.findings.push(newFinding);
    return newFindingIndex; 
}
function setNewImageLink(idOfNewFinding){
    let newImageIndex = getNewId(model.data.images); 
    let newImage = {
        id: newImageIndex, 
        filePath: model.inputs.registerFinding.img
    }
    model.data.images.push(newImage); 
    model.data.findingImages.push({
        findingId: idOfNewFinding, 
        imgId: newImageIndex
    }); 

}