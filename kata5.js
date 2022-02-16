
function getMiddle(string) {
    let stringLength = string.length;
    if (stringLength % 2 === 0) {
        let firstCharIndex = (stringLength / 2) - 1;
        let secondCharIndex = stringLength / 2;
        return string[firstCharIndex] + string[secondCharIndex];
    } else {
        let charIndex = Math.floor(stringLength / 2);
        return string[charIndex];
    }
    
}

console.log("Mi aspetto 'er', ho ottenuto ", getMiddle("paperino"));
console.log("Mi aspetto 'p' , ho ottenuto ", getMiddle("pippo"));
console.log("Mi aspetto 'te' , ho ottenuto ", getMiddle("architettura"));