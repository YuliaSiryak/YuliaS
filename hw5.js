function drawTriangle(height, symbol) {
    let y = symbol;
    for (let i = 0; i < height ; i++) {
        console.log(y) ;
        y += symbol;
    }
}
drawTriangle(7, "*") 

function drawTriangle(height, symbol) {
    let y = symbol ;
    for (let i = 0; i < height ; i++) {
        console.log (" " . repeat(height--)+y) ;
        y += symbol+symbol ;
    }
}
drawTriangle(7, "*") 