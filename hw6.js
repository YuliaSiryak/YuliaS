function isNaN(value) {
    return value !== value;
}
console.log(isNaN(NaN)); 
console.log(isNaN(12)); 
console.log(isNaN("12"));
console.log(isNaN(12.5));
console.log(isNaN(null)); 
console.log(isNaN(undefined)); 
console.log(isNaN('123'));
console.log(isNaN('1test2'));
console.log(isNaN(true)); 
console.log(isNaN(false)); 
console.log(isNaN(function() {}));
console.log(isNaN('test')); 
console.log(isNaN(Symbol('sym')));
console.log(isNaN(' '));
console.log(isNaN(" "));
