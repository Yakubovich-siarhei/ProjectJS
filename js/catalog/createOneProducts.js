class CreateOneProduct{
    getCatalogItem(card){
        let elem = document.createElement(card.tagName);
        if('className' in card){
            elem.setAttribute('class', card.className);
        };
        if('textName' in card){
            elem.innerHTML = card.textName;
        };
        if('backgroundImage' in card){
            elem.style.backgroundImage = card.backgroundImage;
        };
        if('id' in card){
            elem.setAttribute('data-id', card.id);
        }
        return elem;
    }
}

let createOneProduct = new CreateOneProduct('.container_counter', catalogProduct)