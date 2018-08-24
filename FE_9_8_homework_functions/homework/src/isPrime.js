// Your code goes here
const num = 5;
isPrime(num);

function isPrime(n) {
    const two = 2;
    if (isNaN(n) || !isFinite(n) || n%1 || n<two){
         return false; 
    }
    let m=Math.sqrt(n);
    for (let i = two; i <= m; i++) {
        if (n%i===0){
             return false;
        }
    }
    return true;
   }