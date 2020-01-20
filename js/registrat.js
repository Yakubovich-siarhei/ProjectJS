let regAc = document.querySelector('.reg_account');
let submitAc = document.querySelector('.submit_account_sign');
let login = document.querySelector('.login');
let loginAc = document.querySelector('.account_name_sign');
let loginPasAc = document.querySelector('.account_password_sign');
let nameAc = document.querySelector('#name_account');
let pasAc = document.querySelector('#password_account');
let pasAc2 = document.querySelector('#password_account_two');
let sign = document.querySelector('.sign');
let ac = document.querySelector('.account');
let logPersons = localStorage.getItem('logPersons');




let adminLogin = function () {
    regAc.addEventListener('click', function () {
        if (nameAc.value && pasAc.value && pasAc2.value !== '') {
            alert('Вы успещно зарегестрированы');
            return Create()

        } else {
            return alert( 'Заполните все данные');
        }
    })
};

if (regAc !== null) {
    window.onload = function () {
        adminLogin();
    }
}

function Create() {
    let person = {
        firstName: nameAc.value,
        password: pasAc.value,
        password2: pasAc2.value
    };

    logPersons.push(person);
    localStorage.setItem("logPersons", JSON.stringify(logPersons));
    return true;
}

logPersons = JSON.parse(logPersons);

if (logPersons === null) {
    logPersons = [];
}


/*-sign in-*/


submitAc.addEventListener('click', function () {
    for (let i in logPersons) {
        if (loginAc.value == logPersons[i].nameAc && loginPasAc.value == logPersons[i].pasAc) {
            window.open('./registrat.html');

        } else if(logPersons !== null) {
            window.open('./registrat.html');
        }
    } 
});

// document.querySelector('.bagSort').onclick = function () {
//     cardStorage = [];
//     cardStorage = JSON.parse(cardStorage);
//     deletCatalog();
//     let allproducts2 = new AllProducts('.container_produkt', '.container_counter', cardStorage);
//     console.log(cardStorage)
// }