"usestrict"

let credits = 23580;
let pricePerDroid = 3000;
let countOfDroid = prompt("Input count of droids, please");
let totalPrice = 0;
if ( countOfDroid === null ) {
    alert('Скасовано користувачем!');
} else {
    totalPrice = +countOfDroid * pricePerDroid;
    if ( totalPrice > credits ) {
        alert('Недостатньо коштів на рахунку!');
    } else {
        let remainder = credits - totalPrice;
        alert(`Ви купили ${countOfDroid} дроїдів, на рахунку залишилося ${remainder} кредитів.`);
    }
}