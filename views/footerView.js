function footerView(){
    return /*HTML*/`
    <div class = "footer">
        <u><p onclick = "setPage(model.app.pages.siteMap)">Sitemap</p></u>
        <u><p onclick = "setPage(model.app.pages.catalog)">Katalog</p></u>
        <u><p onclick = "setPage(model.app.pages.userArea)">Kontakt oss</p></u>
    </div>
    `; 
}