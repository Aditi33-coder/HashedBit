const correctFn = (str,wrongWord,correctWord)=>{
    let newStr = str.replace(wrongWord,correctWord);
    return newStr;
}
console.log(correctFn('Hi my name is Aditi','Aditi','Aditi Verma'));