function homePageView() {
    return drawMain();
}

function drawMain() {
    let html = /*HTML*/`
    <h1>Hva kan du finne i naturen?</h1>
    <div class = "mainPageDiv">
    <div class = "carousel">
    <div class = "carousel-inner">
    ${createAndShowItems()}
    </div>
    </div>
    <div class = "divtext">
    <h2>Er det lett eller vanskelig å finne mat i norsk natur?</h2>
    <p>Livet i naturen i Norge kan virke romantisk, men når det gjelder å finne mat – er det ikke alltid så enkelt. 
    Skogen er rik på ressurser, men ikke alle sopper er spiselige, og bærene er ikke alltid lett å finne.</p>
    <p>Sesongen betyr alt: om sommeren og tidlig høst kan man finne blåbær, tyttebær, multer og noen typer spiselige sopper – som kantareller og steinsopp. 
    Men man må ofte gå langt, og det er ingen garanti for fangst.</p>
    <p>Kunnskap, tålmodighet og litt flaks er nødvendig. Feil kan være farlige, spesielt hvis man forveksler spiselige sopper med giftige.</p>
    <p>
    Å finne mat i norsk villmark er derfor mer en ferdighet enn en hobby.
    Vi håper at nettstedet vårt kan gjøre veien litt enklere – og tryggere.
    </p>
    </div>
    <div class = "buttonsDiv">
    <button class = "btnOnMain" onclick = "setPage(model.app.pages.catalog)">Katalog</button>
    <button class = "btnOnMain" onclick = "setPage(model.app.pages.rewards)">Rewards</button>
    <button class = "btnOnMain" onclick = "setPage(model.app.pages.userArea)">Din siden</button>
    </div> 

    </div>
    `;
    return html;
}