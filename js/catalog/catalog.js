
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
                 activeText = 'Добавить в корзину';
            } else{
                 activeClass = 'container';
                 activeText = 'Удалить из корзины';
            }
            let item = createOneProduct.getCatalogItem({
                tagName: 'div',
                className: 'item'
            });
            let name = createOneProduct.getCatalogItem({
                tagName: 'div',
                className: 'name',
                textName: this.catalogProduct[i].name
            });
            let img = createOneProduct.getCatalogItem({
                tagName: 'div',
                className: 'img',
                backgroundImage: `url('${this.catalogProduct[i].img}')` 
            });
            let price = createOneProduct.getCatalogItem({
                tagName: 'div',
                className: 'price',
                textName: this.catalogProduct[i].price + ' $'
            });
            let btn = createOneProduct.getCatalogItem({
                tagName: 'button',
                className: 'btn_catalog',
                textName: activeText,
                id: this.catalogProduct[i].id
            });
            btn.addEventListener('click', function () {
                let id = this.getAttribute('data-id');
                let result = cardStorage.putProducts(id);

                allProducts.containerCounter.innerHTML = result.products.length;

                if(result.productPush){
                    this.innerHTML = 'Удалить из корзины';
                } else {
                    this.innerHTML = 'Добавить в корзину';
                }
            });
            
            item.appendChild(name);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
        }
        this.container.appendChild(wrapper);
    }
}

let allProducts = new AllProducts('.container_produkt', '.container_counter', catalogProduct);

//  сортировка по классу ()
let sort = [];
function sortProduct () {
    function getStatus(array, search) {
        return array.filter((item) => {
                    return search(item)
            })
        };
       
        let inp = document.getElementsByName('radio');
        for (let i = 0; i < inp.length; i++) {
            if (inp[i].type == "radio" && inp[i].checked) {
                // console.log("selected: " + inp[i].value);           
    
        
        sort = (getStatus(catalogProduct, (item) => {
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
    

// возрастание цены
document.querySelector('.sortUp').onclick = () => {
    let myarray=catalogProduct;
        myarray.sort(function (a, b) {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            // a должно быть равным b
            return 0;
          });
    console.log(myarray)
    deletCatalog();
    let allproducts3 = new AllProducts('.container_produkt', '.container_counter', myarray);
}

// убывание  цены
document.querySelector('.sortDown').onclick = () => {
    let myarray=catalogProduct;
        myarray.sort(function(a,b){ 
    return b.price-a.price; 
})    
    console.log(myarray)
    deletCatalog();
    let allproducts5 = new AllProducts('.container_produkt', '.container_counter', myarray);
}

// убывание цены2
document.querySelector('.sortUp2').onclick = () => {
    let myarray2=sort;
        myarray2.sort(function(a2,b2){ 
    return a2.price-b2.price;    
})
    console.log(myarray2)
    deletCatalog();
    let allproducts4 = new AllProducts('.container_produkt', '.container_counter', myarray2);
}



// возрастание  цены2
document.querySelector('.sortDown2').onclick = () => {
    let myarray2=sort;
        myarray2.sort(function(a2,b2){ 
    return b2.price-a2.price; 
})    
    console.log(myarray2)
    deletCatalog();
    let allproducts6 = new AllProducts('.container_produkt', '.container_counter', myarray2);
}

document.querySelector('.allSort').onclick = () => {
    deletCatalog();
    let allproducts7 = new AllProducts('.container_produkt', '.container_counter', catalogProduct);
}



// let globalSearchValue = document.querySelector('.globalSearchValue');
let sortNamevalue = document.querySelector('.sortNamevalue');

sortNamevalue.oninput = () => {
    let myarray=catalogProduct;
    let arr = [];
    // sortNamevalue.value = globalSearchValue.value;
    function sortName () {
        for (let i = 0; i < myarray.length; i++) {
        var tr = myarray[i].name.indexOf(sortNamevalue.value) !== -1;
        
        if (tr == true) {
            arr.push(myarray[i])            
        }
        
    }
    deletCatalog();

    let allproducts2 = new AllProducts('.container_produkt', '.container_counter', arr);

    console.log(arr)
    }
    sortName ()
}


    