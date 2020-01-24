// всплывающее окно 

let mod2 = document.querySelector('.mod2');
let admin2 = document.querySelector('.mod_admin2');
let sub2 = document.querySelector('.mod_submit2');
let text2 = document.querySelector('.mod_text2');
let closeM2 = document.querySelector('.mod_close2');

function modaln2 () {
  mod2.style.display = "block";  
  function adminT2 () {
    admin2.innerHTML =   "Ого, как ты нашёл этот сайт?"
  }
  setTimeout(() => adminT2(), 2000);
    function admin22 () {
      admin2.innerHTML += '\r\n'+ "И на том спасибо!";
    }
    setTimeout(() => admin22(), 8000);
}
setTimeout(() => modaln2(), 5000);

sub2.onclick = () => {
  let valText2 = text2.value;
  admin2.innerHTML += '\r\n'+ text2.name+ ":  " +  valText2;
}

closeM2.onclick = () => {
    mod2.style.display = "none"; 
}



// выпадающее меню

let el = document.getElementsByClassName('menu-item');

for(let i=0; i<el.length; i++) {
  el[i].addEventListener("mouseenter", showSub, false);
  el[i].addEventListener("mouseleave", hideSub, false);
}

function showSub() {
  if(this.children.length>1) {
     this.children[1].style.height = "auto";
     this.children[1].style.overflow = "visible";
     this.children[1].style.opacity = "1";
     this.children[1].style.position = "absolute";
     this.children[1].style.zIndex = 1000;
  } else {
     return false;
  }
}

function hideSub() {
  if(this.children.length>1) {
    this.children[1].style.height = "0px";
    this.children[1].style.overflow = "hidden";
    this.children[1].style.opacity = "0";
  } else {
     return false;
  }
}


// //  acardion

// let cart = document.querySelector('.cart');
// let news = document.querySelector('.news');
// let cartBlok = document.querySelector('.container_abount');
// let newsBlok = document.querySelector('.container_news');


// news.addEventListener('click', function(){
//   newsBlok.style.display = "block"
//   cartBlok.style.display = "none"
// })

// cart.addEventListener('click', function(){
//   newsBlok.style.display = "none"
//   cartBlok.style.display = "block"
// })
  
//
