let side_A = parseFloat(prompt('Enter length of side a ', '0'));
let side_B = parseFloat(prompt('Enter length of side b', '0'));
let angle = parseFloat(prompt('Enter angle', '0'));

const ANGLE_SUM = 180;

const outputTemplate = (side_C, square, perimeter) => `
c length: ${+side_C.toFixed(2)} 
Triangle square: ${+square.toFixed(2)}
Triangle perimeter: ${+perimeter.toFixed(2)}
`;

let output;

if (checkingData(side_A) || checkingData(side_B) || checkingData(angle) || angle > ANGLE_SUM) {
    output = 'Invalid data';
} else {
    const side_C = get_side_c(side_A, side_B, angle);
    const perimeter = side_A + side_B + side_C;
    const square = getSquare(perimeter/2, side_A, side_B, side_C);
    output = outputTemplate(side_C, square, perimeter);
}

function get_side_c(side_A, side_B, angle) {    
    const gamma = Math.PI / ANGLE_SUM * angle;
    return Math.sqrt(side_A*side_A + side_B*side_B - 2 * side_A * side_B * Math.cos(gamma));
}

function checkingData(number) {
    return isNaN(number) || typeof number !== 'number' || number < 0;
}



function getSquare(perimeter, side_A, side_B, side_C) {
    return Math.sqrt(perimeter * ((perimeter - side_A) * (perimeter - side_B) * (perimeter - side_C)));
}

console.log(output);