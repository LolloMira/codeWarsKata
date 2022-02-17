//widht è sempre dispari
//root è la widht

//  3
//121
//=7

//    5
//  343
//12321
//=24

//      7
//    565
//  34543
//1234321
//=58


function mountainsOfHoiyama(widht) {
    
    let startingNumber = 0;

    let actualWidht = widht;

    let array = [];


    while (actualWidht > 0) {

        let actualNumber = startingNumber;

        for (let i = 0; i < actualWidht; i++) {

            if (i <= actualWidht / 2) {
                actualNumber++;

            } else{

                actualNumber--;
            }

            array.push(actualNumber);
        }

        actualWidht = actualWidht - 2;
        startingNumber = startingNumber + 2;
    }

    return array.reduce((p, c) => p + c);
}



function mountainsOfHoiyama2(number) {
    return (widht + 1) * (widht ** 2 + 2 + widht) / 8;
}


console.log("Mi aspetto 7 ho ottenuto: ", mountainsOfHoiyama(3));
console.log("Mi aspetto 24 ho ottenuto: ", mountainsOfHoiyama(5));
console.log("Mi aspetto 58 ho ottenuto: ", mountainsOfHoiyama(7));