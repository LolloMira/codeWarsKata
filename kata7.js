
function incrementString(string) {
    let lastChar = string[string.length - 1];
    if (isNaN(lastChar)) {
        return string + 1;
    }
    let importantIndex
    for (let i = string.length - 2; i >= 0; i--) {
        if (isNaN(string[i])) {
            importantIndex = i;
            break;
        }
    }

    const partialString = string.substring(0, importantIndex +1);
    const stringNumber = string.substring(importantIndex + 1);
    const number = parseInt(stringNumber);
    const incrementNumber = number + 1;

    return partialString + incrementNumber;
}




function incrementString2(string) {
    const regex = RegExp(/\d+$/);
    let searchResult = regex.exec(string);
    let numberFoundString;
    
    if (!searchResult) {
        return string + 1;

    } else {

    numberFoundString = searchResult[0];
    const numberInt = parseInt(numberFoundString);
    return string.substring(0, string.length-numberFoundString.length) + (numberInt + 1);
    }
}


console.log("Mi aspetto 'montagna89' ho ottenuto: ", incrementString2("montagna88"));
console.log("Mi aspetto 'montagna1' ho ottenuto: ", incrementString2("montagna"));
console.log("Mi aspetto '55montagna1' ho ottenuto: ", incrementString2("55montagna")); 