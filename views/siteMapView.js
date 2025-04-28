function siteMapView(){
    return drawSiteMap();
}

function drawSiteMap(){
   return /*HTML*/`
   <div class = "sitemap">
   <u><p onclick = "setPage(model.app.pages.homePage)">Hjemme nettside</p></u>
   <u><p onclick = "setPage(model.app.pages.catalog)">Katalog</p></u>
   
   &nbsp;<u><p onclick = "setPage(model.app.pages.homeAndMain)">Item nettside</p></u>
   &nbsp;&nbsp;<u><p onclick = "setPage(model.app.pages.homeAndMain)">Funn nettside</p></u>
   &nbsp;&nbsp;<u><p onclick = "setPage(model.app.pages.thankYouAddedFind)">Takk for funn ditt</p></u>

   <u><p onclick = "setPage(model.app.pages.login)">Logg inn</p></u>
   <u><p onclick = "setPage(model.app.pages.registerUser)">Registrer</p></u>
   &nbsp;<u><p onclick = "setPage(model.app.pages.userArea)">Personal info</p></u>
   &nbsp;<u><p onclick = "setPage(model.app.pages.rewards)">Rewards</p></u>
   <u><p onclick = "setPage(model.app.pages.userArea)">Kontakt oss</p></u>
</div>
   `;
}