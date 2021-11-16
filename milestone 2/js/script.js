// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

let boxContainer = document.querySelector('.container_box')

for( i=1; i<=100; i++ ) {

    let FizzBuzz; 
    
    if ( i % 3 === 0 && i % 5 === 0 ) {
        FizzBuzz = 'FizzBuzz';
    } else if ( i % 3 === 0 ) {
        FizzBuzz = 'Fizz';
    } else if ( i % 5 === 0 ) {
        FizzBuzz = 'Buzz';
    } else {
        FizzBuzz = i;
    }
    
    
    let newBox = `
    <div class="box">${FizzBuzz}</div>
    `;

    boxContainer.innerHTML += newBox;
}