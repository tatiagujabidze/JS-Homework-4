// Exercise 2

const capitalLetters = (sentence) => {
    
    return sentence
    
    // .map((sent) => sent.split (" "))
    .map((sentence) => sentence[0].toUpperCase() + sentence.slice(1))
    // .join (" ")


}

console.log(capitalLetters (["life is wonderful"]))