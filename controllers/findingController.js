let findId = 0; //remove after. 

function getFindingImageHTML(id){
    this.findId = id; 
    let imgPath = ''; 
    for (const element of model.data.findings) {
        if (element.id == this.findId){
            let imgId = getImageId(element.id); 
            for (const image of model.data.images) {
                if (image.id == imgId){
                    imgPath = image.filePath; 
                    break; 
                }
            }
        }
    }
    return `<img src ="${imgPath}" height = "500px" width = "500px">`;
}

function getUserNameHTML() {
    for (const finding of model.data.findings) {
        if(this.findId == finding.id){
            for (const user of model.data.users) {
                if(finding.userId == user.id){
                    return `Ble funnet av ${user.name}`
                }
            }
        }
    }
}
function getDescriptionHTML() {
    for (const finding of model.data.findings) {
        if(finding.id == this.findId){
            return `Kommentar: ${finding.description}`
        }
    }
}
function getFindingDateHTML() {
    for (const finding of model.data.findings) {
        if(finding.id == this.findId){
            return finding.dateFind;
        }
    }
}

function getFindingPlaceHTML(){
    for (const finding of model.data.findings) {
        if(finding.id == this.findId){
            for (const location of model.data.location) {
                if (location.id == finding.locationId){
                    return `Var funnet i ${location.name}`
                }
            }
        }
    }
}

function getImageId(findingId){
    for (const findImage of model.data.findingImages) {
        if (findingId == findImage.findingId){
            return findImage.imgId; 
        }
    }
}

function getItemId(idOfFinding){
    for (const finding of model.data.findings) {
        if(finding.id == idOfFinding){
            return finding.itemId; 
        }
    }
}