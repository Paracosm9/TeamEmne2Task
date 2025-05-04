function registerFindingView(){  
    if (isLoggedIn()){
        if ( model.inputs.registerFinding.name == ''
            || model.inputs.registerFinding.img == ''
            || model.inputs.registerFinding.locationName == ''
            || model.inputs.registerFinding.description == ''){
        return drawView();
        } 
        else return drawThankYouPage();
    }
    else {
        return showYouMustLogin();
    }
}

function drawView(){
    return /*HTML*/`
        <div class = "findingAdd">
        
        <input type="text" id="linkToWebSite" 
        value = "${model.inputs.registerFinding.img == '' ? 'Legg til linken til image' : model.inputs.registerFinding.img}" 
        name = "findingLink"
        onchange = "model.inputs.registerFinding.img = this.value, isFieldEmpty(this.id), updatePageWithImg()"
        >
        ${model.inputs.registerFinding.img == '' || !isValidUrl(model.inputs.registerFinding.img) ? '' : `<img src ="${model.inputs.registerFinding.img}" width = "100" height = "100" referrerpolicy="noreferrer"></img>`}


        <br>
        <input type="text" id="findName" 
        value = "${model.inputs.registerFinding.name == '' ? 'Legg til navn' : model.inputs.registerFinding.name}"
        name = "findingName"
        onchange = "model.inputs.registerFinding.name = this.value, isFieldEmpty(this.id)"
        >

        <br>
        <textarea id="findDescription" 
        value = "${model.inputs.registerFinding.description == '' ? 'Legge til beskrivelse av sted' : model.inputs.registerFinding.description}"
        name="findDescription"
 
        onchange = "model.inputs.registerFinding.description = this.value, isFieldEmpty(this.id)"
        >Legge til beskrivelse av sted
        </textarea>
        <br><br>
        <input type="text" id="findPlace" 
        value = "${model.inputs.registerFinding.locationName == '' ? 'Angi koordinater eller område' : model.inputs.registerFinding.locationName}"
        name="findPlace"
        onchange = "model.inputs.registerFinding.locationName = this.value, isFieldEmpty(this.id)"
        >
        </div>

        <div class = "findingAdd">
        <button class = "addButton" id = "regFindButtonOk" onclick = "updateModel()" >Registrer</button>
        <button class = "addButton" id = "regFindButtonCancel" onclick = "setPage(model.app.pages.catalog)">Avbryt</button>
        </div>
    `;
}

function drawThankYouPage(){
    return /*HTML*/`
    <h1>Takk for din funn!<h1>
    <button onclick = "setPage(model.app.pages.catalog)">Gå tilbake til catalog</button>
    `;
}
