function homePageView(){
    return drawMain(); 
}

function drawMain(){
    let html = /*HTML*/`
    <div class = "mainPageDiv">
    <div class = "gallery">
    <h1>Hva kan du finne i naturen?</h1>
    ${createAndShowItems() }
    </div>
    <div class = "divtext">
    <h2>Er det lett eller vanskelig å finne mat i norsk natur?</h2>
    <p>Livet i naturen i Norge kan virke romantisk, men når det gjelder å finne mat – er det ikke alltid så enkelt. <br>
    Skogen er rik på ressurser, men ikke alle sopper er spiselige, og bærene er ikke alltid lett å finne.</p>
    <p>Sesongen betyr alt: om sommeren og tidlig høst kan man finne blåbær, tyttebær, multer og noen typer spiselige sopper – som kantareller og steinsopp. 
    Men man må ofte gå langt, og det er ingen garanti for fangst.</p>
    <p>Kunnskap, tålmodighet og litt flaks er nødvendig. Feil kan være farlige, spesielt hvis man forveksler spiselige sopper med giftige.</p>
    <p>
    Å finne mat i norsk villmark er derfor mer en ferdighet enn en hobby.<br>
    Vi håper at nettstedet vårt kan gjøre veien litt enklere – og tryggere.
    </p>
    </div>
    <div class = "buttonsDiv">
    <button class = "btnOnMain" onclick = "changePage()">Kontakt oss</button>
    <button class = "btnOnMain" onclick = "changePage()">Katalog</button>
    <button class = "btnOnMain" onclick = "changePage()">Rewards</button>
    <button class = "btnOnMain" onclick = "changePage()">Dine funn</button>
    <button class = "btnOnMain" onclick = "changePage()">Bytt passord</button>
    </div> 

    </div>
    `; 
    return html; 
}