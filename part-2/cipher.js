let ciphArr = []
let deciphArr = []
let beginLtr = [`A`, `B`]
let endLtr = [`Y`, `Z`]
let vowels = [`Y`, `U`, `O`, `I`, `E`, `A`]
let vowelNum = [1, 2, 3, 4, 5, 6]
function myCipher(str) {
    let strArr = str.toUpperCase().split('')
    for(i = 0; i < strArr.length; i++) {
     if(strArr[i] === vowels[0]) {
        ciphArr.push(vowelNum[0])
    } else if(strArr[i] === vowels[1]) {
        ciphArr.push(vowelNum[1]) 
    } else if(strArr[i] === vowels[2]) {
        ciphArr.push(vowelNum[2]) 
    } else if(strArr[i] === vowels[3]) {
        ciphArr.push(vowelNum[3]) 
    } else if(strArr[i] === vowels[4]) {
        ciphArr.push(vowelNum[4]) 
    } else if(strArr[i] === vowels[5]) {
        ciphArr.push(vowelNum[5]) 
    } else if(strArr[i] === " ") {
        ciphArr.push(strArr[i])
    } else if(strArr[i] === ".") {
        ciphArr.push(strArr[i])
    } else if(strArr[i] === ",") {
        ciphArr.push(strArr[i])
    } else if(strArr[i] === "'") {
        ciphArr.push(strArr[i])
    } else if(strArr[i] === "!") {
        ciphArr.push(strArr[i])
    }else if(strArr[i] === beginLtr[0]) {
        ciphArr.push(endLtr[0])
    } else if(strArr[i] === beginLtr[1]) {
        ciphArr.push(endLtr[1])
    } else {
        let ciphCodeCon = strArr[i].charCodeAt() - 2
        let ciphCon = String.fromCharCode(ciphCodeCon)
        ciphArr.push(ciphCon)
    } 
}
let cipher = ciphArr.join('')
    console.log(cipher)
}

myCipher(`I love cryptography!`)
