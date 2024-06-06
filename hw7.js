function pad(string, symbol, count, isBeginning) {
    if (count > string.length) {
        return isBeginning ? symbol.repeat(count - string.length) + string : string + symbol.repeat(count - string.length);
    } else {
        return string;
    }
}
console.log(pad('qwerty', '+', 10, false));  
console.log(pad('qwerty', '+', 10, true));   
console.log(pad('hello', '*', 8, false));    
console.log(pad('hello', '*', 8, true));     
console.log(pad('test', '-', 5, true));     
console.log(pad('test', '-', 5, false));    
console.log(pad('test2', '!', 4, false));       
console.log(pad('test2', '!', 4, true));           