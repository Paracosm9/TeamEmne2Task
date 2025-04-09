function isFieldEmpty(elementId) {
    console.log(elementId);
    let element = document.getElementById(elementId);
    let inputs = model.inputs.registerFinding;
    if ((elementId == 'linkToWebSite' && inputs.img == '')
        || (elementId == 'findPlace' && inputs.locationName == '')
        || (elementId == 'findName' && inputs.name == '')
        || (elementId == 'findDescription' && inputs.description == ''))

    {
        element.style.border = "2px solid red";
    }
    else {
        element.style.border = "";
    }

    // updateView();
}