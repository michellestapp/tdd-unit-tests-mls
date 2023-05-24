function sum(a,b){

return a + b;
}

function divide(a,b){

return a/b;
}
function subtract(a,b){

return a-b;

}

function mult(a,b){
return a*b
}

function capFirstLetter(word){

    return word.charAt(0).toUpperCase() + word.slice(1) 
}

function concatenate(word1,word2){

    const totalword = word1 + word2
    return totalword

}

function returnSecondWord(statement){
    const words = statement.split(' ')
    const secondWord = words[1]
    print(secondWord)
return secondWord
}
export {sum,divide,subtract,mult,capFirstLetter,concatenate, returnSecondWord}


