function makeLine(size) {
    let line = '';
    for (i = 0; i < size; i++) {
    line += '#' 
    }
    return line;
}
//console.log(makeLine(5))

function makeSquare(size) {
    let theSquare = '';

    for (let i = 0; i<size; i++) {
        theSquare += makeLine(size);
        if (i < size - 1) {
            theSquare += '\n'; 
        }
    }
    return theSquare
}
//console.log(makeSquare(5))

function makeRectangle(width, height) {
    let theRectangle = ''

    for (let i=0; i<height; i++){
        theRectangle += (makeLine(width));
        if (i < height - 1) {
            theRectangle += '\n'
        }
        
    }
    return theRectangle
}
console.log(makeRectangle(7, 4))