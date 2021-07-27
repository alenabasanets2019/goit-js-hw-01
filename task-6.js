"usestrict"


//input = prompt("Input your number", 0);
/*for (let i = 0;;i++) {
    input = prompt("Input your number", 0);
    if ( input !== null ) {
        total += input; 
    } else {
        alert(`Загальна сума чисел дорівнює ${total}`); 
        break;
    }
}*/
let input;
let total = 0;
do {  
    input = prompt("Input your number", 0);
    total += +input;
    if ( input === null ) {
        alert(`Загальна сума чисел дорівнює ${total}`); 
        break;
    }
}
while (input)