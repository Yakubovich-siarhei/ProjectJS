
class AllProducts{
    constructor(containerProducts, containerCounter, catalogProduct){
        this.container = document.querySelector(containerProducts);
        this.containerCounter = document.querySelector(containerCounter);
        this.catalogProduct = catalogProduct;
        this.createCatalog();
    }

    
    createCatalog(){
        let wrapper = document.createElement('slot');
        wrapper.className = 'slot'; 
        let products = cardStorage.getProducts();
        this.containerCounter.innerHTML = products.length;
        for(let i = 0; i < this.catalogProduct.length; i++){
            let index = products.indexOf(this.catalogProduct[i].id);
            let activeClass;
            let activeText;
            if(index === -1){
                 activeClass = '';
                 activeText = 'Добавить в корзину'
            } else{
                 activeClass = 'container';
                 activeText = 'Добавить в корзину'
            }
            let item = this.getCatalogItem({
                tagName: 'div',
                className: 'item'
            });
            let name = this.getCatalogItem({
                tagName: 'div',
                className: 'name',
                textName: this.catalogProduct[i].name
            });
            let img = this.getCatalogItem({
                tagName: 'div',
                className: 'img',
                backgroundImage: `url('${this.catalogProduct[i].img}')` 
            });
            let price = this.getCatalogItem({
                tagName: 'div',
                className: 'price',
                textName: this.catalogProduct[i].price
            });
            let btn = this.getCatalogItem({
                tagName: 'button',
                className: 'btn_catalog',
                textName: activeText,
                id: this.catalogProduct[i].id
            });
            btn.addEventListener('click', function(){
                let id = this.getAttribute('data-id');
                let result = cardStorage.putProducts(id);
                if(result.productPush){
                    this.innerHTML = 'Удалить из корзины';
                } else {
                    this.innerHTML = 'Добавить в корзину';
                }
            })
            item.appendChild(name);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
        }
        this.container.appendChild(wrapper);
    }

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
        }
        if('id' in card){
            elem.setAttribute('data-id', card.id);
        }
        return elem;
    }

}

let allProducts = new AllProducts('.container_produkt', '.container_counter', catalogProduct);

//  сортировка по классу ()
let sort = [];
function sortProduct () {
    function getStatus(array, search) {
        return array.filter(function(item) {
                    return search(item)
            })
        };
       
        let inp = document.getElementsByName('radio');
        for (let i = 0; i < inp.length; i++) {
            if (inp[i].type == "radio" && inp[i].checked) {
                // console.log("selected: " + inp[i].value);           
    
        
        sort = (getStatus(catalogProduct, function(item) {
            return item.idCod == inp[i].value;
        }));
            // console.log(sort);  
        deletCatalog();
    
        let allproducts2 = new AllProducts('.container_produkt', '.container_counter', sort);
        }
        }
        }
    
    function deletCatalog() {
        let cle = document.getElementById('container_produkt');
        cle.innerHTML = '';
    }
    
    document.getElementById('radioClik').onclick = sortProduct;
    
function sort21 () {
    for (let i = 0; i < catalogProduct.length; i++) {

    }
}

// убывание цены
document.querySelector('.sortUp').onclick = function () {
    let myarray=catalogProduct;
        myarray.sort(function(a,b){ 
    return a.price-b.price;    
})
    console.log(myarray)
    deletCatalog();
    let allproducts2 = new AllProducts('.container_produkt', '.container_counter', myarray);
}

// убывание цены2
document.querySelector('.sortUp2').onclick = function () {
    let myarray2=sort;
        myarray2.sort(function(a,b){ 
    return a.price-b.price;    
})
    console.log(myarray2)
    deletCatalog();
    let allproducts2 = new AllProducts('.container_produkt', '.container_counter', myarray2);
}



// возрастание  цены
document.querySelector('.sortDown').onclick = function () {
    let myarray=catalogProduct;
        myarray.sort(function(a,b){ 
    return b.price-a.price; 
})    
    console.log(myarray)
    deletCatalog();
    let allproducts2 = new AllProducts('.container_produkt', '.container_counter', myarray);
}

// возрастание  цены
document.querySelector('.sortDown2').onclick = function () {
    let myarray2=sort;
        myarray2.sort(function(a,b){ 
    return b.price-a.price; 
})    
    console.log(myarray2)
    deletCatalog();
    let allproducts2 = new AllProducts('.container_produkt', '.container_counter', myarray2);
}

document.querySelector('.allSort').onclick = function () {
    deletCatalog();
    let allproducts2 = new AllProducts('.container_produkt', '.container_counter', catalogProduct);
}


// let maxPrice = document.querySelector('.maxPrice')
// document.querySelector('#sortPrice').onclick = function () {
//     let myarray=catalogProduct;
//     function fn(myarray, b, c) {
//           return myarray.filter(function(myarray) {
//             return myarray.price >= b && myarray.price <= c;
//           }).sort(function(a, b) {
//             return b.price - a.price;
//           });
//         }
//         fn(myarray, 1, 100)  
//     console.log(myarray)
//     deletCatalog();
//     let allproducts2 = new AllProducts('.container_produkt', '.container_counter', myarray);
// }


// let maxPrice = document.querySelector('.maxPrice')
// document.querySelector('#sortPrice').onclick = function () {
//     let myarray=catalogProduct;
//         myarray.sort(function(a,b){ 
//             for (let i=0; i<myarray.length; i++) {
//                 if (myarray[i].price <= 100) {                    
//                 }
//             }
            
//     return b.price-a.price; 
// })    
//     console.log(myarray)
//     deletCatalog();
//     let allproducts2 = new AllProducts('.container_produkt', '.container_counter', myarray);
// }



    