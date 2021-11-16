// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3,
// per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

let boxContainer = document.querySelector('.container_box')

for( i=1; i<=100; i++ ) {

    let FizzBuzz;
    let backColorBox; 
    
    if ( i % 3 === 0 && i % 5 === 0 ) {
        FizzBuzz = 'FizzBuzz';
        backColorBox = 'red_back';
    } else if ( i % 3 === 0 ) {
        FizzBuzz = 'Fizz';
        backColorBox = 'green_box';
    } else if ( i % 5 === 0 ) {
        FizzBuzz = 'Buzz';
        backColorBox = 'yellow_box';
    } else {
        FizzBuzz = i;
    }
    
    let newBox = `
    <div class="box ${backColorBox}">${FizzBuzz}</div>
    `;

    boxContainer.innerHTML += newBox;
}