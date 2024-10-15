//Ex-FizzBuzz

//Inizio un ciclo che va da 1 a 100
for (let i = 0; i < 100; i++) {
    let numb = i + 1;
    console.log(numb);

//Verifico se i numeri siano divisibili sia per 3 che per 5 
    // SE vero, stampo "FizzBuzz"
    let number3 = 3;
    let number5 = 5;

    if(numb % number3 === 0 && numb % number5 ===0) {
        console.log(`${numb}: FizzBuzz`);
    };
    
};