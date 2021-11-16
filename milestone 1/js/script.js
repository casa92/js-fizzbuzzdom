// Scrivi un programma che stampi i numeri da 1 a 100.
// Per i multipli di 3 stampi in console “Fizz” al posto del numero e per i multipli di 5 stampi in console Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console FizzBuzz.

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
    console.log(FizzBuzz);
}