"usestrict"

let country = prompt("Input your country", "");
let countries = ["China", "Chile", "Australia", "India", "Jamaica"];
switch(country.toLowerCase()) {
    case countries[0].toLowerCase():
        alert(`Доставка в ${countries[0]} буде коштувати 100 кредитів`);
        break;
    case countries[1].toLowerCase():
        alert(`Доставка в ${countries[1]} буде коштувати 250 кредитів`);
        break;
    case countries[2].toLowerCase():
        alert(`Доставка в ${countries[2]} буде коштувати 170 кредитів`);
        break;
    case countries[3].toLowerCase():
        alert(`Доставка в ${countries[3]} буде коштувати 80 кредитів`);
        break;
    case countries[4].toLowerCase():
        alert(`Доставка в ${countries[4]} буде коштувати 120 кредитів`);
        break;
    default:
        alert('У вашій країні доставка недоступна');
}