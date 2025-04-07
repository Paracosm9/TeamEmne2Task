function getArrayOfItems() { 
    model.inputs.catalog.items = getFilteredAndSortedData(); 
    updateView();    
}

function getFilteredAndSortedData(){
    let items = model.data.items;
    let itemsWithType = [];
    for (const item of items) {
        let typeId = item.type;
        let itemId = item.id
        itemsWithType.push({
            id: itemId,
            name: item.name,
            latinName: item.latinName,
            description: item.description,
            type: getType(typeId),
            characteristics: getCharacteristics(itemId),
            amountOfPlaces: getAmountOfPlaces(itemId),
            oneImage: getImageForItem(itemId), 
            locations: getLocations(itemId)
        });
    }
    model.inputs.catalog.items = itemsWithType; 
    sortByOption(); 
    searchByName();
    searchByLocation(); 
    filterByCharacteristic(); 
    return model.inputs.catalog.items;
}

function isFirstCall(){
    let input = model.inputs.catalog; 
    console.log(input);
     return (input.sort == '' && input.name == '' && input.location == '' 
        && input.isEdible == false && input.isPoisonous == false && input.isPartiallyEdible == false
        && input.items.length == 0
    )  
}

function getLocations(itemId){
    let locations = []; 
    for (const find of model.data.findings) {
        if (find.itemId == itemId && find.acceptedToBePublished){
            let locationId = find.locationId;
            for (const location of model.data.location) {
                if (locationId == location.id && !locations.includes(location.name)){
                    locations.push(location.name); 
                }
            } 
        }
    }
    console.log(locations); 
    return locations; 
}

function getType(typeId) {
    let types = model.data.types;
    for (const type of types) {
        if (type.id == typeId) {
            return type.name;
        }
    }
    throw "Check items types: type id was not found."
}

function getAmountOfPlaces(itemId) {
    let findings = model.data.findings;
    let amountOfFindings = 0;
    for (const finding of findings) {
        if (finding.itemId == itemId) {
            amountOfFindings++;
        }
    }
    return amountOfFindings;
}

function getImageForItem(itemId) {
    let findings = model.data.findings;
    let findingImages = model.data.findingImages;
    let images = model.data.images; 
    let findingId = 0;
    let imageId = 0; //change to array if we need more. 
    let imaginaryImg = ''; 
    for (const finding of findings) {
        if (finding.itemId == itemId) {
            findingId = finding.id; 
            break; //change if we need more images. For future. 
        }
    }
   
    for (const findIdImgId of findingImages) {
        if (findIdImgId.findingId == findingId) {
            imageId = findIdImgId.imgId;
            break; //change if we need more images. For future. 
        }
    }

    for (const img of images) {
        if (img.id == imageId){
            imaginaryImg = img.filePath; 
            break; //change if we need more images. For future. 
        }
    }
    return imaginaryImg; 
}


function sortByOption(){ 
    let option = model.inputs.catalog.sort; 
    if (option == '') {
        return; 
    }
    let sorted = [];
    if (option == 'artsnavn'){
      sorted = model.inputs.catalog.items.sort(
            function (a, b) {
                if (a.name == b.name) return 0;
                if (a.name > b.name) return 1;
                else return -1;
            }
        );
    }
    else if (option == 'antall') {
        sorted = model.inputs.catalog.items.sort(
            function (a, b) {
                if (a.amountOfPlaces == b.amountOfPlaces) return 0;
                if (a.amountOfPlaces < b.amountOfPlaces) return 1;
                else return -1;
            }
        );
    }
    model.inputs.catalog.items = sorted; 
}

function searchByName(){
    if ( model.inputs.catalog.name == '' ){
        return; 
    }

    let name = model.inputs.catalog.name.toLowerCase(); 
    let items = model.inputs.catalog.items; 
    let filteredItems = []; 
    for (const item of items) {
        if (item.name.toLowerCase().includes(name)){
            filteredItems.push(item); 
        }
    }
    model.inputs.catalog.items = [...filteredItems];
}

function searchByLocation(){
    if ( model.inputs.catalog.location == ''){
        return; 
    }

    let locationFromSearch = model.inputs.catalog.location.toLowerCase(); 
    let items = model.inputs.catalog.items; 
    let filteredItems = []; 
    for (const item of items) {
        if (item.locations.length > 0){
            for (const location of item.locations) {
                if (location.toLowerCase().includes(locationFromSearch)){
                    filteredItems.push(item); 
                    break; //we found once, no need to push same objects here.
                }
            }
        }
    }
    model.inputs.catalog.items = [...filteredItems];
}



function getCharacteristics(itemId){
    let itemChar = model.data.itemCharacteristics;
    for (const characteristic of itemChar) {
        if (characteristic.itemId == itemId) {  
            return getEdibleOrNotChar(characteristic.type);
        }
    }
    throw "Check items characteristics: item id was not found in characterstics!"

}

function getEdibleOrNotChar(typeId){
    let characteristics = model.data.characteristics;
    for (const characteristic of characteristics) {
        if (characteristic.itemId == typeId) {
            return characteristic.type;
        }
    }
}


function filterByCharacteristic(){
    if (model.inputs.catalog.isEdible == false && model.inputs.catalog.isPoisonous == false && model.inputs.catalog.isPartiallyEdible == false){
        return; 
    }
    let newItems = []; 
    for (const item of model.inputs.catalog.items){
        if (model.inputs.catalog.isEdible && item.characteristics == 'Edible'){
            newItems.push(item); 
        }
        if (model.inputs.catalog.isPoisonous && item.characteristics == 'Non-Edible'){
            newItems.push(item); 
        }
        if (model.inputs.catalog.isPartiallyEdible && item.characteristics == 'Edible(if prepared in proper way)'){
            
            newItems.push(item); 
        }
    }
    model.inputs.catalog.items = newItems; 
}


function goToPage(id){
    console.log("This is plug for item id: " + id);
}