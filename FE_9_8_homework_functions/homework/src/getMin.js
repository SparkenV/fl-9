// Your code goes here
let fnum = 4;
let snum = -3;
let tnum = 0;

getMin(fnum, snum, tnum);

function getMin(){
    let min = arguments[0];
    for(let i=1; i <= arguments.length; i++){
        if(arguments[i]< min){
            min = arguments[i];
        }
    }
    return min;
}