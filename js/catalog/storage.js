
class CardStorage{
    constructor(){}
    getProducts(){
        let products = [];
        let productsLocalStorage = localStorage.getItem('cardStorage');
        if(productsLocalStorage != null){
            products = JSON.parse(productsLocalStorage);
        }
        return products;
    }

    putProducts(id){
        let products = this.getProducts();
        let index = products.indexOf(id);
        let productPush;
        if(index === -1){
            products.push(id);
            productPush = true;
        } else {
            products.splice(index, 1);
            productPush = false;
        }

        localStorage.setItem('cardStorage', JSON.stringify(products));

        return{
            productPush: productPush,
            products: products
        }
    }
}

let cardStorage = new CardStorage();