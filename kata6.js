
//trovare tutti i multipli di tre e cinque minori
//del numero presi una sola volta e sommarli 
//numeri negativi ritornano zero 

function solution(number) {
    let set = new Set();
    for (let i = 3; i < number; i = i + 3) {
        set.add(i);
    }
    for (let i = 5; i < number; i = i + 5) {
        set.add(i);
    }
    let sum = 0;
    for (const number of set) {
        sum += number;
    }
    return sum;

}


function solution2(number) {
    
    let sum = 0;

    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
        
    }
    return sum;
}


function solution3(number) {
    return number < 0 ? 0 : [...new Array(number).keys()].reduce((p, c) => (c % 3 === 0 || c % 5 === 0) ? p + c : p, 0);
}



console.log("Mi aspetto 0, ho ottenuto: ", solution3(-3));
console.log("Mi aspetto 0, ho ottenuto: ", solution3(2));
console.log("Mi aspetto 23, ho ottenuto: ", solution3(10));
console.log("Mi aspetto 60, ho ottenuto: ", solution3(16));



// const array = [2, 2, 3, 5, 5, 1, 1, 1];

// array = [...new Set(array)];