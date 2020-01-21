class Cart{
    constructor(containerCounter, containerCart , catalogProduct) {
        this.containerCounter = document.querySelector(containerCounter);
        this.containerCart = document.querySelector(containerCart);
        this.catalogProduct = catalogProduct;
        this.create();
    }


    create(){
        this.containerCounter.addEventListener('click', function(){
            cart.containerCart.style.display = 'flex';
            let productsCart = cart.getProductsCart();
            let wrapper = document.createElement('slot');
            wrapper.className = 'slot2';

            for(let i = 0; i < productsCart.length; i++){
                let item = createOneProduct.getCatalogItem({
                    tagName: 'div',
                    className: 'item'
                });
                let name = createOneProduct.getCatalogItem({
                    tagName: 'div',
                    className: 'name',
                    textName: productsCart[i].name
                });
                let img = createOneProduct.getCatalogItem({
                    tagName: 'div',
                    className: 'img',
                    backgroundImage: `url('${productsCart[i].img}')` 
                });
                let price = createOneProduct.getCatalogItem({
                    tagName: 'div',
                    className: 'price',
                    textName: 'цена товара: '+productsCart[i].price + ' $'
                });
                item.appendChild(name);
                item.appendChild(img);
                item.appendChild(price);
                wrapper.appendChild(item);
            }
            let close = createOneProduct.getCatalogItem({
                tagName: 'div',
                className: 'cart-close'
            });

            close.addEventListener('click', function(){
                cart.containerCart.innerHTML = '';
                cart.containerCart.style.display = 'none';
            });

            cart.containerCart.appendChild(wrapper);
            cart.containerCart.appendChild(close);

        });
    }

    getProductsCart(){
        let products = cardStorage.getProducts();
        let productsCart = [];
        for(let i = 0; i < this.catalogProduct.length; i++){
            if(products.indexOf(this.catalogProduct[i].id) !== -1){
                productsCart.push(this.catalogProduct[i]);
            }
        }
        return productsCart;
    }
}


let cart = new Cart('.container_counter', '.container_cart', catalogProduct);