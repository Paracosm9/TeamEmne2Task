function getArrayOfItems() {
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
            amountOfPlaces: getAmountOfPlaces(itemId),
            oneImage: getImageForItem(itemId)
        });
    }
    console.log(itemsWithType);
    model.inputs.catalog.items = itemsWithType; 
    return itemsWithType;
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

function goToPage(id){
    console.log("This is plug for item id: " + id);
}

function sortByOption(){ 
    let option = model.inputs.catalog.sort; 
    if (option == '') {
        return; 
    }
    
    if (option == 'artsnavn' ){
        model.inputs.catalog.items.sort(
            function (a, b) {
                if (a.name == b.name) return 0;
                if (a.name > b.name) return 1;
                else return -1;
            }
        );

    }
    else if (option == 'antall') {
        model.inputs.catalog.items.sort(
            function (a, b) {
                if (a.amountOfPlaces == b.amountOfPlaces) return 0;
                if (a.amountOfPlaces < b.amountOfPlaces) return 1;
                else return -1;
            }
        );
    }
    updateView();
}