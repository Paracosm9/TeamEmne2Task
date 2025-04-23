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
    return `<img src ="${imgPath}" width = "100" height = "100">`;;
}

function getUserNameHTML() {
    return /*HTML*/`Plug for username. Some cool username`;
}
function getDescriptionHTML() {
    for (const finding of model.data.findings) {
        if(finding.id == this.findId){
            return finding.description;
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