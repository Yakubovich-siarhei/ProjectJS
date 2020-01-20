// всплывающее окно 

let mod = document.querySelector('.mod');
let admin = document.querySelector('.mod_admin');
let sub = document.querySelector('.mod_submit');
let text = document.querySelector('.mod_text');
let closeM = document.querySelector('.mod_close');

function modaln () {
  mod.style.display = "block";  
  function adminT () {
    admin.innerHTML =   "Ого, как ты нашёл этот сайт?";
  }
  setTimeout(() => adminT(), 2000);
    function admin2 () {
      admin.innerHTML += '\r\n'+ "И на том спасибо!";
    }
    setTimeout(() => admin2(), 10000);
}
setTimeout(() => modaln(), 5000);

sub.onclick = function () {
  let valText = text.value;
  admin.innerHTML += '\r\n'+ text.name+ ":  " +  valText;
}

function closMod () {
  mod.style.display = "none"; 
}
closeM.onclick = closMod;

