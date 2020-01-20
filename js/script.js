// каусель
let images = document.querySelectorAll('.slide_single');
let current = 0;

function slider() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add('opacity0');
  }
  images[current].classList.remove('opacity0');  
}
slider()

function auto () {
  if (current + 1 == images.length) {
    current = 0;
  } else {
  current++;
  }
  slider()
};

setInterval(() => auto(), 4000);

// prev
document.querySelector('.arrow-prev').onclick = function () {
  if (current -1 == -1) {
      current = images.length -1;
  } else {
    current--;
  }
  slider();
};

// next
document.querySelector('.arrow-next').onclick = function () {
  if (current + 1 == images.length) {
      current = 0;
  } else {
    current++;
  }
  slider();
};

//точки
document.querySelector('.slider-dots_item1').onclick = function op1 () {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add('opacity0');
  }
  images[0].classList.remove('opacity0');  
}

document.querySelector('.slider-dots_item2').onclick = function op2 () {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add('opacity0');
  }
  images[1].classList.remove('opacity0');  
}

document.querySelector('.slider-dots_item3').onclick = function op3 () {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add('opacity0');
  }
  images[2].classList.remove('opacity0');  
}




// карусель акции
let images2 = document.querySelectorAll('.slide_single2');
let current2 = 0;

function slider2() {
  for (let i = 0; i < images2.length; i++) {
    images2[i].classList.add('opacity0');
  }
  images2[current2].classList.remove('opacity0');  
}

slider2()


document.querySelector('.arrow-prev2').onclick = function () {
  if (current2 -1 == -1) {
      current2 = images2.length -1;
  } else {
    current2--;
  }
  slider2();
};

document.querySelector('.arrow-next2').onclick = function () {
  if (current2 + 1 == images2.length) {
      current2 = 0;
  } else {
    current2++;
  }
  slider2();
};


// выпадающее меню

let el = document.getElementsByClassName('menu-item');

for(let i=0; i<el.length; i++) {
  el[i].addEventListener("mouseenter", showSub, false);
  el[i].addEventListener("mouseleave", hideSub, false);
}

function showSub(e) {
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

function hideSub(e) {
  if(this.children.length>1) {
    this.children[1].style.height = "0px";
    this.children[1].style.overflow = "hidden";
    this.children[1].style.opacity = "0";
  } else {
     return false;
  }
}


// timer


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector(".days");
  let hoursSpan = clock.querySelector(".hours");
  let minutesSpan = clock.querySelector(".minutes");
  let secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    let t = getTimeRemaining(endtime);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      let deadline = new Date(Date.parse(new Date()) + 11 * 1000);
      initializeClock('countdown', deadline);
    }

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
  }

  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}

let deadline = new Date(Date.parse(new Date()) + 10 * 1000);
initializeClock("countdown", deadline);




let deadlineDate="02 20 2020 00:00:00 GMT+0300";
timeend= new Date();
// IE и FF по разному отрабатывают getYear()
timeend= new Date(deadlineDate);
// для задания обратного отсчета до определенной даты укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ);
// Для задания даты с точностью до времени укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ, ЧАСЫ-1, МИНУТЫ);
function time() {
	today = new Date();
	today = Math.floor((timeend-today)/1000);
	tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
	tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
	thour=today%24; today=Math.floor(today/24);
	timestr=today +" "+ thour+" "+tmin+" "+tsec;
  document.getElementById('t').innerHTML='<div class="date_time">'
                                        +'<span>' + today +'</span>'                                      
                                        +'<span>' + thour +'</span>'
                                        +'<span>' + tmin +'</span>'
                                        +'<span>' + tsec +'</span>'
                                        +'</div>'
                                        +'<div class="text_time">'                                        
                                        +'<span>'+"Дней"+'</span>'
                                        +'<span>'+"Часов"+'</span>'
                                        +'<span>'+"Минут"+'</span>'
                                        +'<span>'+"Секунд"+'</span>'
                                        +'</div>';
	window.setTimeout("time()",1000);
}

document.getElementById('body').onload = time();









// 






// //document.getElementsByClassName("container8")
// //document.getElementById
// //document.querySelector  ищет только первый
// //document.querySelectorAll   находит все
