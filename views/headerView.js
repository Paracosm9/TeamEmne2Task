function headerView(){
    return drawHeader(); 
}


function drawHeader(){
    return /*HTML*/`
    <div class = "header">
        <div class="back-button">
            ${model.app.previousPage == '' ? `` : `<button onclick = "goToPreviousPage()">⟵</button>`}
        </div>
        <div class = "logo-img" onclick = "setPage(model.app.pages.homeAndMain)">
            <img src = "common/images/logo/logo.png" width = "125" height = "125">
        </div>
        <div class = "user-header">
            ${getUserName() ?? ''}
        </div> 
    </div>
    
    `;
}