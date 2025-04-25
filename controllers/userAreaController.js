function getAmountOfFindings() {
    let amount = 0; 
    for (const finding of model.data.findings) {
        if (model.app.currentUser == finding.userId && finding.acceptedToBePublished){
            amount++;
        }
    }
    return amount;
}


function drawUserFindingsCarousell() {
    let findingsWithImages = [];
    let findingsHTML = ``;
    for (const finding of model.data.findings) {
        if (finding.acceptedToBePublished && finding.userId == model.app.currentUser) {
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
        <div class = "carouselElement" style = "border: 3px dashed green" onclick = "setFindingPage(model.app.pages.finding,${finding.id})">
        <img src =${finding.imagePath} width = "100" height = "100"><br>
        Date: ${finding.dateFind}<br>
        Location: ${finding.location}
        </div>
        `; 
        findingsHTML += oneFinding; 
    }
    return findingsHTML;
}
