// Your code goes here
const num = -12400;
reverseNumber(num);

function reverseNumber(n){
	let rNumber = +Math.abs(n).toString().split('').reverse().join('');
    
    if(n < 0){
        return -rNumber;
    }else{
        return rNumber
    }
}