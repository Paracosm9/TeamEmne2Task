function registerFindingView (){

    return drawView(); 
}

function drawView(){
    return /*HTML*/`
        <div class = "findingAdd" style = "border: 5px solid black; margin: 20px; display:flex; justify-content: center; flex-direction: column; padding: 5px; ">
        
        <input type="text" id="linkToWebSite" 
        value = "Legg til linken til image"
        name="findingLink"
        onchange = "model.inputs.registerFinding.img = this.value, isFieldEmpty(this.id)"
        >
        <button class = "addButton" id = "regFindButton1">Legg til bildet…</button>
        <br>
        <input type="text" id="findName" 
        value = "Legg til navn"
        name="findingName"
        onchange = "model.inputs.registerFinding.name = this.value, isFieldEmpty(this.id)"
        >

        <br>
        <textarea id="findDescription" 
        value = ""
        name="findDescription"
 
        onchange = "model.inputs.registerFinding.description = this.value, isFieldEmpty(this.id)"
        >Legge til beskrivelse av sted
        </textarea>
        <br><br>
        <input type="text" id="findPlace" 
        value = "Angi koordinater eller område"
        name="findPlace"
        onchange = "model.inputs.registerFinding.locationName = this.value, isFieldEmpty(this.id)"
        >
        </div>

        <div class = "findingAdd" style = "border: 5px solid black; margin: 20px; display:flex; justify-content: center; flex-direction: row; padding: 5px; ">
        <button class = "addButton" id = "regFindButtonOk" onclick = "updateModel()" >Registrer</button>
        <button class = "addButton" id = "regFindButtonCancel">Avbryt</button>
        </div>
    
    `;
}