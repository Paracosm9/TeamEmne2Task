function createAndShowItems() {
    let html = ``;
    let imageWithName = [];
    for (const item of model.data.items) {
        if (isEdible(item.id)) {
            let itemId = item.id;
            let name = item.name;
            let imagePath = '';
            for (const itemImage of model.data.itemsImages) {
                if (itemId == itemImage.itemId) {
                    let imgId = itemImage.imgId;
                    for (const image of model.data.images) {
                        if (image.id == imgId) {
                            imagePath = image.filePath;
                            break;
                        }
                    }
                }
            }
            imageWithName.push({
                itemId: item.id,
                itemName: name,
                img: imagePath
            }
            );
        }
    }

    for (const element of imageWithName) {
        console.log(element.itemId + " - itemId")
        let oneItem = /*HTML*/`
        <div class = "carousel-item"  onclick = "setItemPage(model.app.pages.item,${element.itemId})">
        <img src =${element.img}>
       
  <div class="carousel-caption">Navn: ${element.itemName}</div>
        </div>
        `;
        html += oneItem;
    }
    return html;
}

function isEdible(itemId) {
    for (const characteristic of model.data.itemCharacteristics) {
        if (itemId == characteristic.itemId && (characteristic.type == 1 || characteristic.type == 2)) {
            return true;
        }
    }
    return false;
}