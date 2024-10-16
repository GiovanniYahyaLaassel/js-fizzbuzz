//Ex-FizzBuzz

//Inizio del ciclo For che va da 1 a 100
for (let i = 0; i < 100; i++) {
    let numb = i + 1;
    console.log(numb);

//Verifico se i numeri siano divisibili sia per 3 che per 5. Creo le variabili 
    // SE vero, stampo "FizzBuzz"
    let number3 = 3;
    let number5 = 5;

    if(numb % number3 === 0 && numb % number5 ===0) {
        console.log(`${numb}: FizzBuzz`);
    }

// Altrimenti verifico se il numero divisibile per 3
    // Se è vero stampo Fizz
    else if (numb % number3 === 0) {
        console.log(`${numb}: Fizz`)
    }

// Altrimennti verifico se il numero e divisibile per 5
    // Se è vero stampare Buzz
        else if(numb % number5 === 0) {
        console.log(`${numb}: Buzz`)
    }
// Fine Ciclo, se il numero non è divisibile ne per 3 ne per 5 verrà stampato il numero stesso.
};