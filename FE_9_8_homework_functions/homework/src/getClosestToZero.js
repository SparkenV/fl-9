// Your code goes here

let firstNum = 9;
let secondNum = -4;
let thirdNum = 5;

getClosestToZero(firstNum, secondNum, thirdNum);

function getClosestToZero(){
    
    let absArray = arguments;
    let min = Math.abs(absArray[0]);
    let minIndex = 0;

    for(let i=0; i <= absArray.length; i++){
        if(Math.abs(absArray[i])< min){
            minIndex = i;
            min = Math.abs(absArray[i]);
        }
    }
    return arguments[minIndex];
}