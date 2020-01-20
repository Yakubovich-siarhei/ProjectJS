let d = document;
let containerAbount = d.querySelector('.container_abount');
let containerNews = d.querySelector('.container_news'); 
let news = d.querySelector('.news');
let cart = d.querySelector('.cart');


news.addEventListener('click', function () {
    containerNews.style.display = "block"; 
    containerAbount.style.display = "none"; 
});

cart.addEventListener('click', function () {
    containerNews.style.display = "none"; 
    containerAbount.style.display = "block"; 
});