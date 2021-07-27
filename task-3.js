"usestrict"

let message;
const ADMIN_PASSWORD = "12Rat";
let password = prompt("Input your password, please", );
if ( password === null ) {
    message = 'Скасовано користувачем!';
} else if ( password == ADMIN_PASSWORD) {
    message = 'Ласкаво просимо!';
} else message = 'Доступ заборонений, невірний пароль!';
alert(message);