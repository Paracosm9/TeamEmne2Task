let id = 0;

function drawImages() {
    this.id = model.app.currentItem;
    let html = ``;
    for (const item of model.data.itemsImages) {
        if (item.itemId == this.id) {
            let idOfImage = item.imgId;
            for (const image of model.data.images) {
                if (image.id == idOfImage) {
                    html += `<img src ="${image.filePath}" class = "descriptImg" width = "400" height = "400">`;
                }
            }
        }
    }
    return html;
}

function drawDescription() {
    for (const item of model.data.items) {
        if (item.id == this.id) {
            console.log
            return item.description;
        }
    }
}

function drawName() {
    for (const item of model.data.items) {
        if (item.id == this.id) {
            return item.name;
        }
    }
}
function drawLatinName() {
    for (const item of model.data.items) {
        if (item.id == this.id) {
            return item.latinName;
        }
    }
}

function getAmountOfFoundings() {
    let amountOfFindings = 0;
    for (const finding of model.data.findings) {
        if (finding.itemId == this.id && finding.acceptedToBePublished) {
            amountOfFindings++;
        }
    }
    return amountOfFindings;
}

function getPlacesWereFound() {
    let locations = [];
    let htmlPlaces = `<ul>`;
    for (const findings of model.data.findings) {
        if (findings.itemId == this.id && findings.acceptedToBePublished && !(locations.includes(findings.locationId))) {
            locations.push(findings.locationId);
        }
    }
    for (const location of locations) {
        console.log(location + " - this is location from findings");
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
        if (finding.acceptedToBePublished && finding.itemId == this.id) {
            findingsWithImages.push({
                id: finding.id,
                location: getLocationName(finding.locationId),
                dateFind: finding.dateFind,
                imagePath: getImagePath(finding.id)
                //userId to add? 

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
