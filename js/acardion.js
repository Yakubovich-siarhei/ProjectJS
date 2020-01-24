var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
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